package com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Tag;
import org.springframework.data.repository.reactive.ReactiveSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends ReactiveSortingRepository<Tag, Long> {


}
