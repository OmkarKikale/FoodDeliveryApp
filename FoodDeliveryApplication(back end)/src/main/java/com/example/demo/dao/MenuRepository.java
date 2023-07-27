package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Menu;

public interface MenuRepository extends JpaRepository<Menu,Long>{
}
