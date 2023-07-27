package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.AdminDao;
import com.example.demo.entity.Admin;
import com.example.demo.service.AdminService;

@RestController

@RequestMapping(path = "/control")
@CrossOrigin("http://localhost:4200")

public class AdminController {
	
	@Autowired
	private AdminDao dao;
	@Autowired
	private AdminService service;

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody Admin userData) {
		Admin user = dao.findByUsername(userData.getUsername());

		if (user.getUserpassword().equals(userData.getUserpassword())) {
			Admin senduser=new  Admin();
			senduser.setAdmin_id(user.getAdmin_id());
			senduser.setFirst_name(user.getFirst_name());
			senduser.setLast_name(user.getLast_name());

			senduser.setUsername(user.getUsername());
			senduser.setUserpassword(user.getUserpassword());
            senduser.setComnfirmuserpassword(user.getComnfirmuserpassword());
			return ResponseEntity.ok(senduser);
		} else {
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
	}


	@PostMapping("/saveuser")
	public ResponseEntity<?> saveUser(@RequestBody Admin user) {
		Admin u=dao.findByUsername(user.getUsername());
		if(u!=null) {
			return (ResponseEntity<?>) ResponseEntity.internalServerError();	
		}
		else {
			dao.save(user);
			return ResponseEntity.ok(user);
		}
	}


}

