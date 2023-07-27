package com.example.demo.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.SaveOrder;

public interface SaveOrderRepository extends CrudRepository<SaveOrder, Long> {

	Optional<SaveOrder> findById(long id);
}
