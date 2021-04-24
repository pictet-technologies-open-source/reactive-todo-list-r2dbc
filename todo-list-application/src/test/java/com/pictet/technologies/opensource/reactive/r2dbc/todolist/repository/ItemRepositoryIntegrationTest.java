package com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Item;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.ItemStatus;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@DirtiesContext
public class ItemRepositoryIntegrationTest {

    @Autowired
    private ItemRepository itemRepository;

    @BeforeEach
    @AfterEach
    public void cleanup() {
        itemRepository.deleteAll();
    }
    @Test
    public void testOptimisticLockingWithPostgres() {

        // Given
        Item existingItem = itemRepository.save(new Item().setDescription("Walk the dog").setStatus(ItemStatus.TODO)).block();
        assertNotNull(existingItem);

        assertEquals(0, existingItem.getVersion());

        existingItem.setDescription("Walk the dog in the park");
        existingItem = itemRepository.save(existingItem).block();
        assertNotNull(existingItem);

        assertEquals(1, existingItem.getVersion());

        // When / Then
        final Item itemToUpdate = new Item().setId(existingItem.getId())
                .setVersion(0L)
                .setDescription("Walk the dog by the river");

            assertThrows(OptimisticLockingFailureException.class, () -> itemRepository.save(itemToUpdate).block());
    }

}
