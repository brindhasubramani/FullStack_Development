package com.example.demo.service;

import com.example.demo.model.OrderDetails;
import com.example.demo.repository.OrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderDetailsService {

    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    public OrderDetails saveOrderDetails(OrderDetails orderDetails) {
        return orderDetailsRepository.save(orderDetails);
    }

    public List<OrderDetails> getAllOrderDetails() {
        return orderDetailsRepository.findAll();
    }

    // public List<OrderDetails> getOrderDetailsByUserId(Long userId) {
    //     return orderDetailsRepository.findByUserId(userId);
    // }

    public Optional<OrderDetails> getOrderDetailsById(Long id) {
        return orderDetailsRepository.findById(id);
    }

    public void deleteOrderDetails(Long id) {
        orderDetailsRepository.deleteById(id);
    }
}
