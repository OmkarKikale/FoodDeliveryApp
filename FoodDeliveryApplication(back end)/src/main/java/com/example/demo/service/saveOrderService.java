package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.SaveOrderRepository;
import com.example.demo.entity.SaveOrder;

@Service
public class saveOrderService {
    private final SaveOrderRepository orderRepository;

    @Autowired
    public saveOrderService(SaveOrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public SaveOrder saveOrder(SaveOrder order) {
        return orderRepository.save(order);
    }
    
    public List<SaveOrder> getAllOrders() {
        return (List<SaveOrder>) orderRepository.findAll();
    }
    
    public void markOrderAsDelivered(long id) {
    	
    	SaveOrder saveOrder=orderRepository.findById(id).get();
    	
    	if(saveOrder != null) {
    		
    		saveOrder.setOrderStatus("Diliverd");
    		orderRepository.save(saveOrder);
    		
    	}
    	
    }
}
