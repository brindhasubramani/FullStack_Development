package com.example.demo.repository;

import com.example.demo.model.Payment;
//import com.example.demo.model.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    
    @Query("SELECT p FROM Payment p WHERE p.orderDetails.order_id = :orderId")
    Optional<Payment> findPaymentByOrderId(Long orderId);
}
