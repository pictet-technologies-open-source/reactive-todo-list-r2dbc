package com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception;


public class ItemNotFoundException extends NotFoundException {


    public ItemNotFoundException(Long id) {
        super(String.format("Item [%d] is not found", id));
    }

}
