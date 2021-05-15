package com.pictet.technologies.opensource.reactive.r2dbc.todolist.model;

import lombok.*;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.*;
import org.springframework.data.relational.core.mapping.Table;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

@Table
@EqualsAndHashCode(of = "id")
@Getter
@Setter
@ToString
@Accessors(chain = true)
@NoArgsConstructor
public class Item {

    public Item(Long id, Long version) {
        this.id = id;
        this.version = version;
    }

    @Id
    private Long id;

    @Version
    private Long version;

    @Size(max=4000)
    @NotBlank
    private String description;

    @NotNull
    private ItemStatus status = ItemStatus.TODO;

    private Long assigneeId;

    @Transient
    private Person assignee;

    @Transient
    private List<Tag> tags;

    @CreatedDate
    private LocalDateTime createdDate;

    @LastModifiedDate
    private LocalDateTime lastModifiedDate;


}
