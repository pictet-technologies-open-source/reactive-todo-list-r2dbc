package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.controller;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Item;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.ItemStatus;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository.ItemRepository;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.ItemResource;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.ItemUpdateResource;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.NewItemResource;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.r2dbc.DataR2dbcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.http.MediaType;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.http.HttpHeaders.IF_MATCH;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension.class)
@DirtiesContext
public class ItemControllerIntegrationTest {

    private static final String URI = "/items/";

    private WebTestClient webTestClient;

    @Autowired
    private ItemRepository itemRepository;

    @LocalServerPort
    private int randomServerPort;

    @BeforeEach
    public void setup() {
        this.webTestClient = WebTestClient.bindToServer().baseUrl("http://localhost:" + randomServerPort).build();
    }

    @BeforeEach
    @AfterEach
    public void cleanup() {
        itemRepository.deleteAll().block();
    }

    //-----------------------------------
    //
    //               GET
    //
    //-----------------------------------

    @Test
    void GIVEN_no_item_WHEN_getting_all_THEN_empty_list() {

        // Given no items

        // When
        webTestClient.get()
                .uri(URI)
                .exchange()
                // Then the list is empty
                .expectStatus().isOk()
                .expectBodyList(ItemResource.class)
                .value(itemResources -> assertTrue(itemResources.isEmpty()));
    }

    @Test
    void GIVEN_no_item_WHEN_getting_all_THEN_the_item_are_returned() {

        // Given no items
        final Item item1 = itemRepository.save(
                new Item().setStatus(ItemStatus.TODO)
                        .setDescription("Item1")).block();
        assertNotNull(item1);

        final Item item2 = itemRepository.save(
                new Item().setStatus(ItemStatus.DONE)
                        .setDescription("Item2")).block();
        assertNotNull(item2);

        // When
        webTestClient.get()
                .uri(URI)
                .exchange()
                // Then
                .expectStatus().isOk()
                .expectBodyList(ItemResource.class)
                .value(itemResources -> {
                    assertEquals(2, itemResources.size());

                    assertItemEquals(item1, itemResources.get(0));
                    assertItemEquals(item2, itemResources.get(1));
                });

    }

    //-----------------------------------
    //
    //               POST
    //
    //-----------------------------------
    @Test
    void GIVEN_a_resource_to_be_created_WHEN_posting_it_THEN_it_is_created() {

        // Given
        final NewItemResource itemResource = new NewItemResource().setDescription("New");

        // When
        final String location = webTestClient.post()
                .uri(URI)
                .bodyValue(itemResource)
                .exchange()
                // Then
                .expectStatus().isCreated()
                .expectHeader().valueMatches(HttpHeaders.LOCATION, "/items/[a-z0-9]+")
                .returnResult(ResponseEntity.class).getResponseHeaders()
                .get(HttpHeaders.LOCATION).get(0);

        final Long id = Long.valueOf(location.substring(location.lastIndexOf('/') + 1));

        final Item createdItem = itemRepository.findById(id).block();
        assertNotNull(createdItem);
        assertEquals(itemResource.getDescription(), createdItem.getDescription());
        assertEquals(ItemStatus.TODO, createdItem.getStatus());
        assertEquals(0L, createdItem.getVersion());
    }

    @Test
    void GIVEN_a_resource_to_be_created_without_description_WHEN_posting_it_THEN_it_is_NOT_created() {

        // Given
        final NewItemResource itemResource = new NewItemResource();

        // When
        webTestClient.post()
                .uri(URI)
                .bodyValue(itemResource)
                .exchange()
                // Then
                .expectStatus().isBadRequest();
    }

    //-----------------------------------
    //
    //               Put
    //
    //-----------------------------------
    @Test
    void GIVEN_no_item_WHEN_trying_to_update_a_non_existing_item_THEN_an_error_is_returned() {
        // Given

        // When
        final ItemUpdateResource itemUpdateResource = new ItemUpdateResource()
                .setDescription("updated")
                .setStatus(ItemStatus.DONE);

        // When
        webTestClient.put()
                .uri(URI + "/-1")
                .bodyValue(itemUpdateResource)
                .exchange()
                // Then
                .expectStatus().isNotFound();
    }

    @Test
    void GIVEN_an_item_WHEN_updating_it_THEN_it_is_updated() throws Exception {

        // Given
        final Item item = itemRepository.save(new Item()
                .setStatus(ItemStatus.DONE)
                .setDescription("description")).block();
        assertNotNull(item);

        assertEquals(0L, item.getVersion());

        // When
        final ItemUpdateResource itemResource = new ItemUpdateResource()
                .setDescription("New description")
                .setStatus(ItemStatus.TODO);

        webTestClient.put()
                .uri(URI + item.getId())
                .bodyValue(itemResource)
                .exchange()
                // Then
                .expectStatus().isNoContent();

        final Item updatedItem = itemRepository.findById(item.getId()).block();
        assertNotNull(updatedItem);
        assertEquals(itemResource.getDescription(), updatedItem.getDescription());
        assertEquals(itemResource.getStatus(), updatedItem.getStatus());
        assertEquals(1L, updatedItem.getVersion());
    }

    @Test
    void testOptimisticLockingPut_preconditionFailed() throws Exception {
        // Given
        Item item = createItemWithTwoRevisions();

        // When
        final ItemUpdateResource itemUpdateResource = new ItemUpdateResource()
                .setDescription("update old version")
                .setStatus(ItemStatus.DONE);

        // Precondition failed
        webTestClient.put()
                .uri(URI + item.getId())
                .bodyValue(itemUpdateResource)
                .header(IF_MATCH, "0")
                .exchange()
                // Then
                .expectStatus().isEqualTo(HttpStatus.PRECONDITION_FAILED);
    }

    @Test
    void testOptimisticLockingPut_preconditionSucceeded() throws Exception {

        // Given
        Item item = createItemWithTwoRevisions();

        // When
        final ItemUpdateResource itemUpdateResource = new ItemUpdateResource()
                .setDescription("update old version")
                .setStatus(ItemStatus.DONE);

        // Precondition succeeded
        webTestClient.put()
                .uri(URI + item.getId())
                .bodyValue(itemUpdateResource)
                .header(IF_MATCH, "1")
                .exchange()
                // Then
                .expectStatus().isNoContent();

        final Item updatedItem = itemRepository.findById(item.getId()).block();
        assertNotNull(updatedItem);
        assertEquals(2L, updatedItem.getVersion());
        assertEquals(itemUpdateResource.getDescription(), updatedItem.getDescription());
    }


    //-----------------------------------
    //
    //               Delete
    //
    //-----------------------------------

    @Test
    void GIVEN_no_item_WHEN_trying_to_delete_a_non_existing_item_THEN_an_error_is_returned() throws Exception {

        webTestClient.delete()
                .uri(URI + "-1")
                .exchange()
                // Then
                .expectStatus().isNotFound();
    }

    @Test
    void GIVEN_an_item_WHEN_deleting_it_THEN_it_is_deleted() throws Exception {

        // Given
        final Item item = itemRepository.save(new Item()
                .setStatus(ItemStatus.DONE)
                .setDescription("description")).block();
        assertNotNull(item);

        // When deleting it
        webTestClient.delete()
                .uri(URI + item.getId())
                .exchange()
                // Then
                .expectStatus().isOk();

        // When trying ot delete it once more
        webTestClient.delete()
                .uri(URI + item.getId())
                .exchange()
                // Then
                .expectStatus().isNotFound();
    }


    @Test
    void testOptimisticLockingDelete_preconditionFailed() throws Exception {

        // Given
        final Item item = itemRepository.save(new Item()
                .setStatus(ItemStatus.DONE)
                .setDescription("description")).block();
        assertNotNull(item);

        // When
        webTestClient.delete()
                .uri(URI + item.getId())
                .header(IF_MATCH, "1")
                .exchange()
                // Then
                .expectStatus().isEqualTo(HttpStatus.PRECONDITION_FAILED);
    }

    @Test
    void testOptimisticLockingDelete_preconditionSucceeded() throws Exception {

        // Given
        final Item item = itemRepository.save(new Item()
                .setStatus(ItemStatus.DONE)
                .setDescription("description")).block();
        assertNotNull(item);

        // When
        webTestClient.delete()
                .uri(URI + item.getId())
                .header(IF_MATCH, "0")
                .exchange()
                // Then
                .expectStatus().isOk();
    }

    //-----------------------------------
    //
    //              Patch
    //
    //-----------------------------------
    @Test
    void GIVEN_no_item_WHEN_trying_to_patch_a_non_existing_item_THEN_an_error_is_returned() throws Exception {

        // When
        webTestClient.patch()
                .uri(URI + "-1")
                .bodyValue("{\"description\": \"updated\"}")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .exchange()
                // Then
                .expectStatus().isNotFound();
    }

    @Test
    void GIVEN_an_item_WHEN_patching_its_status_THEN_only_the_status_is_patched() throws Exception {

        // Given
        final Item item = itemRepository.save(new Item()
                .setStatus(ItemStatus.DONE)
                .setDescription("description")).block();
        assertNotNull(item);

        // When
        webTestClient.patch()
                .uri(URI + item.getId())
                .bodyValue("{\"description\": \"updated\"}")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .exchange()
                // Then
                .expectStatus().isNoContent();

        final Item updatedItem = itemRepository.findById(item.getId()).block();
        assertNotNull(updatedItem);
        assertEquals("updated", updatedItem.getDescription());
        assertEquals(ItemStatus.DONE, updatedItem.getStatus());
        assertEquals(1L, updatedItem.getVersion());
    }

    @Test
    void testOptimisticLockingPatch_preconditionFailed() throws Exception {

        // Given
        final Item item = createItemWithTwoRevisions();

        // When
        webTestClient.patch()
                .uri(URI + item.getId())
                .bodyValue("{\"description\": \"updated\"}")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .header(IF_MATCH, "0")
                .exchange()
                // Then
                .expectStatus().isEqualTo(HttpStatus.PRECONDITION_FAILED);
    }

    @Test
    void testOptimisticLockingPatch_preconditionSucceeded() throws Exception {

        // Given
        final Item item = createItemWithTwoRevisions();

        // When
        webTestClient.patch()
                .uri(URI + item.getId())
                .bodyValue("{\"description\": \"updated\"}")
                .header(IF_MATCH, "1")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .exchange()
                // Then
                .expectStatus().isNoContent();

        final Item updatedItem = itemRepository.findById(item.getId()).block();
        assertNotNull(updatedItem);
        assertEquals(2L, updatedItem.getVersion());
        assertEquals("updated", updatedItem.getDescription());
    }

    //-----------------------------------
    //
    //         Private methods
    //
    //-----------------------------------
    private Item createItemWithTwoRevisions() {
        Item item = itemRepository.save(new Item()
                .setStatus(ItemStatus.DONE)
                .setDescription("description")).block();
        assertNotNull(item);
        assertEquals(0L, item.getVersion());

        item = itemRepository.save(item.setDescription("description version 1")).block();
        assertNotNull(item);
        assertEquals(1L, item.getVersion());
        return item;
    }

    private void assertItemEquals(final Item item, final ItemResource itemResource) {
        assertEquals(item.getDescription(), itemResource.getDescription());
        assertEquals(item.getStatus(), itemResource.getStatus());
        assertEquals(item.getVersion(), itemResource.getVersion());
    }

}
