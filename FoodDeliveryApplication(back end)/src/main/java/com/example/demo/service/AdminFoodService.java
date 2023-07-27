package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.FoodRepository;
import com.example.demo.entity.AdminFood;

@Service
public class AdminFoodService {
    private final FoodRepository foodRepository;

    @Autowired
    public AdminFoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public AdminFood addFood(AdminFood food) {
        // Save the food item to the database
        AdminFood savedFood = foodRepository.save(food);
        return savedFood;
    }
}

