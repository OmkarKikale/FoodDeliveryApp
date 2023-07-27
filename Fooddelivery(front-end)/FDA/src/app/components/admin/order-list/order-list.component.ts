import { Component, OnInit } from '@angular/core';
import { AdminserService } from 'src/app/adminser.service';
import { OderDetails } from '../../comman/oder-details';
import { Foodservice } from '../../comman/foodservice';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: OderDetails[] = []; 

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
  }

  constructor(private orderService: AdminserService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getAllOrders().subscribe(
      (data: OderDetails[]) => {
        console.log('API Response:', data);
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
  
  // marksAsDelivered(id: any){
  //   console.log(id);
  //   this.AdminserService.markOrderAsDelivered(id).subscribe(
  //     (response) => {
  //      console.log(response);
  //     },(error) => {
  //       console.log(error);
  //     }
  //   )
  // }
  markOrderDelivered(orderId: number) {
    this.orderService.markOrderAsDelivered(orderId).subscribe(
      response => {
        // Handle success if needed
        this.loadOrders();
        console.log('Order marked as delivered:', response);
      },
      error => {
        // Handle error if needed
        console.error('Error marking order as delivered:', error);
      }
    );
  }
}
