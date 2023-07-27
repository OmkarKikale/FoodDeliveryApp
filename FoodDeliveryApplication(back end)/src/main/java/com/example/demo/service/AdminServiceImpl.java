
package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.dao.AdminDao;
import com.example.demo.entity.Admin;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminDao dao;

    @Override
    public Admin findByUsername(String uname) {
        return dao.findByUsername(uname);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Admin userData) {
        Admin user = dao.findByUsername(userData.getUsername());

        if (user != null && user.getUserpassword().equals(userData.getUserpassword())) {
            Admin senduser = new Admin();
            senduser.setAdmin_id(user.getAdmin_id());
            senduser.setFirst_name(user.getFirst_name());
            senduser.setLast_name(user.getLast_name());
            senduser.setUsername(user.getUsername());
            senduser.setUserpassword(user.getUserpassword());
            senduser.setComnfirmuserpassword(user.getComnfirmuserpassword());
            return ResponseEntity.ok(senduser);
        } else {
            return ResponseEntity.badRequest().body("Invalid credentials.");
        }
    }
    
   

    @Override
    public ResponseEntity<?> saveAdmin(Admin user) {
        Admin existingUser = dao.findByUsername(user.getUsername());
        if (existingUser != null) {
            return ResponseEntity.badRequest().body("Username already exists.");
        } else {
            dao.save(user);
            return ResponseEntity.ok(user);
        }
    }

	@Override
	public ResponseEntity<?> saveUser(Admin user) {
		// TODO Auto-generated method stub
		return null;
	}

    // Other methods can be added here as needed.
}

