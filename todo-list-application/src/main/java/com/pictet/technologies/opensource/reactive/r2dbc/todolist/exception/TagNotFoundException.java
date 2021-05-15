package com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception;


public class TagNotFoundException extends NotFoundException {

    public TagNotFoundException(Long id) {
        super(String.format("Tag [%d] is not found", id));
    }

}
