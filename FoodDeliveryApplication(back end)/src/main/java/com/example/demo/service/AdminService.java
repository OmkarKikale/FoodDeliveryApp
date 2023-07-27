package com.example.demo.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entity.Admin;


public interface AdminService 
{
	     Admin findByUsername(String uname);
		public ResponseEntity<?> saveUser(@RequestBody Admin user) ;
		ResponseEntity<?> saveAdmin(Admin user);
	
//		
}

