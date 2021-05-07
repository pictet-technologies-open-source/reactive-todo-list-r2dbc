package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.mapper;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Tag;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.TagResource;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TagMapper {

    TagResource toResource(Tag person);
}
