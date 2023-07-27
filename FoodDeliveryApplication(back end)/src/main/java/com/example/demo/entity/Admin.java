package com.example.demo.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="admin")
public class Admin 
{
	@Id
	
//	@NotNull
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Admin_id")
	private int admin_id;
//	@Size(min=2, max=30) 
//	@NotNull

	@Column(name="first_name")
	private String first_name;
//	@Size(min=2, max=30) 
//	@NotNull

	@Column(name="last_name")
	private String last_name;
	//@Size(min=2, max=30) 
	//@NotNull


	@Column(name="user_name")
	private String username;
	//@Size(min=2, max=30) 
	//@NotNull

	@Column(name="user_password")
	private String userpassword;
	
	@Column(name="confirm_password")
	private String comnfirmuserpassword;

	

	public Admin() {
		super();
	}



public Admin(int admin_id, String first_name, String last_name, String username, String userpassword,
		String comnfirmuserpassword) {
	super();
	this.admin_id = admin_id;
	this.first_name = first_name;
	this.last_name = last_name;
	this.username = username;
	this.userpassword = userpassword;
	this.comnfirmuserpassword = comnfirmuserpassword;
}



public int getAdmin_id() {
	return admin_id;
}



public void setAdmin_id(int admin_id) {
	this.admin_id = admin_id;
}



public String getFirst_name() {
	return first_name;
}



public void setFirst_name(String first_name) {
	this.first_name = first_name;
}



public String getLast_name() {
	return last_name;
}



public void setLast_name(String last_name) {
	this.last_name = last_name;
}



public String getUsername() {
	return username;
}



public void setUsername(String username) {
	this.username = username;
}



public String getUserpassword() {
	return userpassword;
}



public void setUserpassword(String userpassword) {
	this.userpassword = userpassword;
}



public String getComnfirmuserpassword() {
	return comnfirmuserpassword;
}



public void setComnfirmuserpassword(String comnfirmuserpassword) {
	this.comnfirmuserpassword = comnfirmuserpassword;
}

	
	
	
}
