package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.mapper;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Person;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.PersonResource;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PersonMapper {

    PersonResource toResource(Person person);

    Person toModel(PersonResource personResource);
}
