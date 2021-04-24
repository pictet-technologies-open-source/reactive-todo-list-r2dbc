package com.pictet.technologies.opensource.reactive.r2dbc.todolist.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.annotation.Version;

import java.time.Instant;

@EqualsAndHashCode(of = "id")
@Getter
@Setter
@ToString
@Accessors(chain = true)
public class Item {

    @Id
    private Long id;

    @Version
    private Long version;

    private String description;

    private ItemStatus status = ItemStatus.TODO;

    @CreatedDate
    private Instant createdDate;

    @LastModifiedDate
    private Instant lastModifiedDate;

}
