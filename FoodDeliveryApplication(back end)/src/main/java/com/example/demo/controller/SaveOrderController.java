package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.SaveOrder;
import com.example.demo.service.saveOrderService;

@RestController
@CrossOrigin
public class SaveOrderController {
    private final saveOrderService orderService;

    @Autowired
    public SaveOrderController(saveOrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/orders")
    public SaveOrder saveOrder(@RequestBody SaveOrder order) {
    	order.setOrderStatus("Placed");
        return orderService.saveOrder(order);
    }
    
    @GetMapping("/List") // Add a new endpoint to fetch all orders
    public List<SaveOrder> getAllOrders() {
        return orderService.getAllOrders();
    }
    
    @GetMapping("/dilivery/{id}")
    public void markOrderAsDiliverd(@PathVariable(name="id")long id) {
    	
    	orderService.markOrderAsDelivered(id);
    }

}
