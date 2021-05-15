package com.pictet.technologies.opensource.reactive.r2dbc.todolist.model;

import lombok.*;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import javax.validation.constraints.NotNull;

@Table
@Getter
@Setter
@ToString
@Accessors(chain = true)
@AllArgsConstructor
@NoArgsConstructor
public class ItemTag {

   public ItemTag(Long itemId, Long tagId) {
      this.itemId = itemId;
      this.tagId = tagId;
   }

   @Id
   private Long id;

   @NotNull
   private Long itemId;

   @NotNull
   private Long tagId;

}
