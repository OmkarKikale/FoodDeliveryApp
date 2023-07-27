import { Component } from '@angular/core';
import { AdminserService } from 'src/app/adminser.service';
import { Foodservice } from '../comman/foodservice';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent {
  food : Foodservice= {
    id: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 1,
    imgurl: '',
    getMenuItems: function (): void {
      throw new Error('Function not implemented.');
    },
    filter: function (arg0: (item: any) => boolean): Foodservice {
      throw new Error('Function not implemented.');
    }
  };
  router: any;

  constructor(private adminService: AdminserService) {}

  submitForm() {
    this.adminService.addMenuItem(this.food).subscribe(() => {
      console.log('Menu item added successfully!');
      alert("Item Added Successfully!")
    }, (error: any) => {
      console.error('Error adding menu item:', error);
      alert("Item Not Added Successfully!")
    });
  }

  sub(){
    this.router.navigateByUrl('/orderlist');
    alert("hie")
  }
}
