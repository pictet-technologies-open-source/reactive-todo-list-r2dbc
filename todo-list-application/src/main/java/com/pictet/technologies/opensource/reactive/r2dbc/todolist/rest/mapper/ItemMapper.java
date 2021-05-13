package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.mapper;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Item;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.ItemResource;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.ItemUpdateResource;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.NewItemResource;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper(componentModel = "spring", uses = {PersonMapper.class, TagMapper.class})
public abstract class ItemMapper {

    @Autowired
    private TagMapper tagMapper;

    public abstract ItemResource toResource(Item item);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "createdDate", ignore = true)
    @Mapping(target = "lastModifiedDate", ignore = true)
    @Mapping(target = "version", ignore = true)
    @Mapping(target = "assignee", ignore = true)
    @Mapping(target = "tags", ignore = true)
    public abstract Item toModel(NewItemResource itemResource);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdDate", ignore = true)
    @Mapping(target = "lastModifiedDate", ignore = true)
    @Mapping(target = "version", ignore = true)
    @Mapping(target = "assignee", ignore = true)
    @Mapping(target = "tags", ignore = true)
    public abstract void update(ItemUpdateResource itemResource, @MappingTarget Item item);

    @AfterMapping
    public void afterMapping(NewItemResource itemResource, @MappingTarget Item item) {
        item.setTags(tagMapper.toTags(itemResource.getTagIds()));
    }

    @AfterMapping
    public void afterMapping(ItemUpdateResource itemResource, @MappingTarget Item item) {
        item.setTags(tagMapper.toTags(itemResource.getTagIds()));
    }
}
