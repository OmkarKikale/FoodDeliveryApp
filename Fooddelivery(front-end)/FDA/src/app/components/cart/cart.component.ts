import { Component, OnInit } from '@angular/core';
import { Foodservice } from '../comman/foodservice';
import { FooodservService } from 'src/app/fooodserv.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  // foods: any;
  foods: Foodservice[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;

  
  constructor(private fs: FooodservService,private router: Router) { }
  ngOnInit() {
    this.fs.getFoodList().subscribe((foods: any) => {
      this.foods = foods;
      this.calculateTotal(); // Calculate total quantity and price
    });
  }
  updateFood(id: number, updatedFood: Foodservice) {
    // this.fs.updateFood(id, updatedFood).subscribe((response: any) => {
    //   // Handle success or error response
    // });
  }

  deleteFood(id: number) {
    this.fs.deleteFood(id).subscribe((response: any) => {
      // Handle success or error response
      alert("Food delete food sucssesfully ")
      this.foods = this.foods.filter((food: Foodservice) => food.id !== id); // Remove the deleted food item from the list
      this.calculateTotal(); // Recalculate total quantity and price
    });
  }

  calculateTotal() {
    this.totalQuantity = this.foods.reduce((total, food) => total + food.quantity, 0);
    this.totalPrice = this.foods.reduce((total, food) => total + food.price * food.quantity, 0);
  }
  

  checkout(){

    this.router.navigate(['/orderform',{
      isSingleProductCheckout:false,id:0
     }]);
  /* this.productService.getProductDetails(false,0).subscribe(
    (response)=>{
     console.log(response);
    },
    (error)=>{
     console.log(error);
    }
   ); */
  }

 

  
 

}
