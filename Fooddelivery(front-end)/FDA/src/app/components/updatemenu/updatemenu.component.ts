import { Component, OnInit } from '@angular/core';
import { Foodservice } from '../comman/foodservice'; 
import { AdminserService } from 'src/app/adminser.service'; 
import { FooodservService } from 'src/app/fooodserv.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './updatemenu.component.html',
  styleUrls: ['./updatemenu.component.css']
})
export class UpdateMenuComponent  {

  menuItems: Foodservice[] = [];
  constructor(private menuService:AdminserService) { }


  ngOnInit(): void {
    this.getMenuItems();
  }
  getMenuItems(): void {
    // Assuming you have a method in your service to fetch the menu items from the backend
    this.menuService.getMenuItems()
      .subscribe(menuItems => this.menuItems = menuItems);
  }

  deleteMenuItem(id: number): void {
    if (confirm('Are you sure you want to delete this menu item?')) {
      this.menuService.deleteMenuItem(id)
        .subscribe(() => {
          // Update the list after successful deletion
          this.menuItems = this.menuItems.filter(item => item.id !== id);
        });
    }
  }
  // menuItems!: Foodservice[];
  // updatedMenu: Foodservice = new Foodservice(0, '', '', 0, 0, ''); // Initialize the variable here

  // constructor(private menuService: AdminserService) { }

  // ngOnInit() {
  //   this.getMenuItems();
  // }

  // getMenuItems() {
  //   this.menuService.getMenuItems().subscribe((menuItems: Foodservice[]) => {
  //     this.menuItems = menuItems;
  //   });
  // }

  // updateMenuItem(id: number, updatedMenu: Foodservice) {
  //   this.menuService.updateMenuItem(id, updatedMenu).subscribe((menu: Foodservice) => {
  //     const index = this.menuItems.findIndex((item: Foodservice) => item.id === id);
  //     if (index !== -1) {
  //       this.menuItems[index] = menu;
  //     }
  //   });
  // }

  // deleteMenuItem(id: number) {
  //   this.menuService.deleteMenuItem(id).subscribe(() => {
  //     this.menuItems = this.menuItems.filter((item: Foodservice) => item.id !== id);
  //   });
  // }
  
}
