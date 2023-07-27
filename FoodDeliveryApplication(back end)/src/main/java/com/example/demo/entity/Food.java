package com.example.demo.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="fooodlist")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="NAME")
    private String name;
    
    @Column(name="description")
    private String description;
    @Column(name="IMAGE")
    private String imgUrl;
    @Column(name="PRICE")
    private double price;
    
    @Column(name="QUANTITY")
    private Integer quantity;  // Changed to Integer
    
    public Food() {};
    public Food(Long id, String name, String description, String imgUrl, double price, Integer quantity) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.imgUrl = imgUrl;
		this.price = price;
		this.quantity = quantity;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	 public Integer getQuantity() {
	        return quantity;
	    }
	    
	    public void setQuantity(Integer quantity) {
	        this.quantity = quantity;
	    }

    // Getters and setters
}

