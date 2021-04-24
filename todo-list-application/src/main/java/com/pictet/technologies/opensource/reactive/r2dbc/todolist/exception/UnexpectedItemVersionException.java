package com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.PRECONDITION_FAILED)
public class UnexpectedItemVersionException extends NotFoundException {

    public UnexpectedItemVersionException(Long expectedVersion, Long foundVersion) {
        super(String.format("The item has a different version than the expected one. Expected [%s], found [%s]",
                expectedVersion, foundVersion));
    }

}
