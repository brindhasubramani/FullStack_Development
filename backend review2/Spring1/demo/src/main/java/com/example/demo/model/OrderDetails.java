package com.example.demo.model;

//import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
public class OrderDetails {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id") // This is optional, for specifying the column name explicitly
    private Long order_id;

    
    private String senderEmail;
    private String senderPhone;
    private String senderOrigin;
    private String senderAddress;
    private String receiverName;
    private String receiverLastName;
    private String receiverEmail;
    private String receiverPhone;
    private String receiverDestination;
    private String receiverAddress;
    private String expectedDeliveryDate;
    private String freight;

    // @ManyToOne
    // @JoinColumn(name = "user_id")
    // @JsonBackReference
    // private User user;



    @OneToOne(mappedBy = "orderDetails", cascade = CascadeType.ALL, orphanRemoval = true)
    private Payment payment;
    
    // Getters and Setters
    public Long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(Long order_id) {
        this.order_id = order_id;
    }

    public String getSenderEmail() {
        return senderEmail;
    }

    public void setSenderEmail(String senderEmail) {
        this.senderEmail = senderEmail;
    }

    public String getSenderPhone() {
        return senderPhone;
    }

    public void setSenderPhone(String senderPhone) {
        this.senderPhone = senderPhone;
    }

    public String getSenderOrigin() {
        return senderOrigin;
    }

    public void setSenderOrigin(String senderOrigin) {
        this.senderOrigin = senderOrigin;
    }

    public String getSenderAddress() {
        return senderAddress;
    }

    public void setSenderAddress(String senderAddress) {
        this.senderAddress = senderAddress;
    }

    public String getReceiverName() {
        return receiverName;
    }

    public void setReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }

    public String getReceiverLastName() {
        return receiverLastName;
    }

    public void setReceiverLastName(String receiverLastName) {
        this.receiverLastName = receiverLastName;
    }

    public String getReceiverEmail() {
        return receiverEmail;
    }

    public void setReceiverEmail(String receiverEmail) {
        this.receiverEmail = receiverEmail;
    }

    public String getReceiverPhone() {
        return receiverPhone;
    }

    public void setReceiverPhone(String receiverPhone) {
        this.receiverPhone = receiverPhone;
    }

    public String getReceiverDestination() {
        return receiverDestination;
    }

    public void setReceiverDestination(String receiverDestination) {
        this.receiverDestination = receiverDestination;
    }

    public String getReceiverAddress() {
        return receiverAddress;
    }

    public void setReceiverAddress(String receiverAddress) {
        this.receiverAddress = receiverAddress;
    }

    public String getExpectedDeliveryDate() {
        return expectedDeliveryDate;
    }

    public void setExpectedDeliveryDate(String expectedDeliveryDate) {
        this.expectedDeliveryDate = expectedDeliveryDate;
    }

    public String getFreight() {
        return freight;
    }

    public void setFreight(String freight) {
        this.freight = freight;
    }

    // public User getUser() {
    //     return user;
    // }

    // public void setUser(User user) {
    //     this.user = user;
    // }
}
