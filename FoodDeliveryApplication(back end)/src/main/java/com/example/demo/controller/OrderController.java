package com.example.demo.controller;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.dao.OrderRepository;
//import com.example.demo.entity.Order;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//
//
//public class OrderController {
//    
//    @Autowired
//    private OrderRepository orderRepository;
//    
//    @PostMapping("/submitOrder")
//    @ResponseBody
//    public String submitOrder(@RequestBody Order order) {
//        // Save the order in the database
//        orderRepository.save(order);
//        
//        // Return a success message
//        return "Order submitted successfully!";
//    }
//}
