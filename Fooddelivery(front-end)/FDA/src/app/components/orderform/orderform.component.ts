import { Component, Input, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Foodservice } from '../comman/foodservice';
import { OderDetails } from '../comman/oder-details';
import { FooodservService } from 'src/app/fooodserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {
  foods: Foodservice[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;

  order: OderDetails = {
    id: 0,
    fullname: '',
    fullAddress: '',
    contactNumber: '',
    alternateContactNumber: '',
    price:0,
    quantity : 0,
    date :'',
    orderStatus: ''
  };

  constructor(private foodService: FooodservService,private router :Router) {}

  ngOnInit() {
    this.foodService.getFoodList().subscribe((foods: Foodservice[]) => {
      this.foods = foods;
      this.calculateTotal();
    });
  }

  submitForm() {
    
    this.order.price= this.totalPrice;
    this.order.quantity = this.totalQuantity;
    this.foodService.submitOrder(this.order)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(["orderconfirm"]);// Handle the success response
      }, error => {
        console.error(error); // Handle any errors
      });
  }

  calculateTotal() {
    this.totalQuantity = this.foods.reduce((total: number, food: Foodservice) => total + food.quantity, 0);
    this.totalPrice = this.foods.reduce((total: number, food: Foodservice) => total + food.price * food.quantity, 0);
  }
  
}
