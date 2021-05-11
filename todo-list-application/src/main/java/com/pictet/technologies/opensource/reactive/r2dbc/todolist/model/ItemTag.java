package com.pictet.technologies.opensource.reactive.r2dbc.todolist.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import javax.validation.constraints.NotNull;

@Table
@Getter
@Setter
@ToString
@EqualsAndHashCode
@Accessors(chain = true)
public class ItemTag {

   @Id
   private Long id;

   @NotNull
   private Long itemId;

   @NotNull
   private Long tagId;

}
