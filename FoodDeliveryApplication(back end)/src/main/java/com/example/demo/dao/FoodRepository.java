package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.AdminFood;
import com.example.demo.entity.Food;


public interface FoodRepository extends JpaRepository<Food, Long> {

	AdminFood save(AdminFood food);
}

