import { Component, OnInit } from '@angular/core';
import { FooodservService } from 'src/app/fooodserv.service';
import { AdminserService } from 'src/app/adminser.service';
import { Foodservice } from '../comman/foodservice';
import { User } from '../comman/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: User[] =[];
  foods: Foodservice[] = [];
  quantityOptions: number[] = [1, 2, 3, 4, 5];

  constructor(
    private foodServices: FooodservService,
    private adminService: AdminserService
  ) {}

  ngOnInit() {
    this.fetchMenuItems();
  }

  fetchMenuItems() {
    this.adminService.getMenuItems().subscribe(
      (menuItems: Foodservice[]) => {
        this.foods = menuItems;
      },
      error => {
        console.error('Error fetching menu items:', error);
      }
    );
  }

  addToCart(food: Foodservice) {
    this.foodServices.addToCart(food).subscribe(
      () => {
        console.log('Item added to cart');
        alert("Item Added In to cart . Please GO !!!")
      },
      
    );
  }
}
