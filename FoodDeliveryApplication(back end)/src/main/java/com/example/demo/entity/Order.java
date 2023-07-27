package com.example.demo.entity;
//
//import org.springframework.web.bind.annotation.CrossOrigin;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//@CrossOrigin(origins = "http://localhost:4200")
//@Entity
//@Table(name = "orders")
//
//public class Order {
//    
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//    private String fullname;
//    private String fullAddress;
//    private String contactNumber;
//    private String alternateContactNumber;
//    private double price;
//    private int quantity;
//	public Order() {
//		super();
//	}
//	public Order(Long id, String fullname, String fullAddress, String contactNumber, String alternateContactNumber,
//			double price, int quantity) {
//		super();
//		this.id = id;
//		this.fullname = fullname;
//		this.fullAddress = fullAddress;
//		this.contactNumber = contactNumber;
//		this.alternateContactNumber = alternateContactNumber;
//		this.price = price;
//		this.quantity = quantity;
//	}
//	public Long getId() {
//		return id;
//	}
//	public void setId(Long id) {
//		this.id = id;
//	}
//	public String getFullname() {
//		return fullname;
//	}
//	public void setFullname(String fullname) {
//		this.fullname = fullname;
//	}
//	public String getFullAddress() {
//		return fullAddress;
//	}
//	public void setFullAddress(String fullAddress) {
//		this.fullAddress = fullAddress;
//	}
//	public String getContactNumber() {
//		return contactNumber;
//	}
//	public void setContactNumber(String contactNumber) {
//		this.contactNumber = contactNumber;
//	}
//	public String getAlternateContactNumber() {
//		return alternateContactNumber;
//	}
//	public void setAlternateContactNumber(String alternateContactNumber) {
//		this.alternateContactNumber = alternateContactNumber;
//	}
//	public double getPrice() {
//		return price;
//	}
//	public void setPrice(double price) {
//		this.price = price;
//	}
//	public int getQuantity() {
//		return quantity;
//	}
//	public void setQuantity(int quantity) {
//		this.quantity = quantity;
//	}
//    
//    // Getters and setters
//    
//   
//}
