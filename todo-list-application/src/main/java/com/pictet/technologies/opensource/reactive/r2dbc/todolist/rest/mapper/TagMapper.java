package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.mapper;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Tag;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.TagResource;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface TagMapper {

    TagResource toResource(Tag person);

    default List<Tag> toTags(Collection<Long> tagsId) {

        if(tagsId == null) {
            return new ArrayList<>();
        }

        // Build tags containing only the ID
        return tagsId.stream()
                .map(tagId -> new Tag().setId(tagId))
                .collect(Collectors.toList());
    }

}
