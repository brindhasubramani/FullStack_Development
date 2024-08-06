package com.example.demo.controller;

import com.example.demo.model.OrderDetails;
import com.example.demo.service.OrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
public class OrderDetailsController {

    @Autowired
    private OrderDetailsService orderDetailsService;

    @PostMapping
    public ResponseEntity<OrderDetails> createOrderDetails(@RequestBody OrderDetails orderDetails) {
        OrderDetails savedOrderDetails = orderDetailsService.saveOrderDetails(orderDetails);
        return ResponseEntity.ok(savedOrderDetails);
    }

    @GetMapping
    public ResponseEntity<List<OrderDetails>> getAllOrderDetails() {
        List<OrderDetails> orderDetailsList = orderDetailsService.getAllOrderDetails();
        return ResponseEntity.ok(orderDetailsList);
    }

    // @GetMapping("/user/{userId}")
    // public ResponseEntity<List<OrderDetails>> getOrderDetailsByUserId(@PathVariable Long userId) {
    //     List<OrderDetails> orderDetailsList = orderDetailsService.getOrderDetailsByUserId(userId);
    //     return ResponseEntity.ok(orderDetailsList);
    // }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDetails> getOrderDetailsById(@PathVariable Long id) {
        Optional<OrderDetails> orderDetails = orderDetailsService.getOrderDetailsById(id);
        return orderDetails.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrderDetails(@PathVariable Long id) {
        orderDetailsService.deleteOrderDetails(id);
        return ResponseEntity.noContent().build();
    }
}
