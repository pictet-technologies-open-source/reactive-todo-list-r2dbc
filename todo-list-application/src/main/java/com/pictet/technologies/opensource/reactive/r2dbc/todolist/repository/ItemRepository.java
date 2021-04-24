package com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Item;
import org.springframework.data.repository.reactive.ReactiveSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends ReactiveSortingRepository<Item, Long> {


}
