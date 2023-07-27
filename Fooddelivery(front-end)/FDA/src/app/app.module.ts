import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/UserModel/login/login.component';
import { RegistrationComponent } from './components/UserModel/registration/registration.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { FoodFormComponent } from './components/food-form/food-form.component';
import { OrderformComponent } from './components/orderform/orderform.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';
import { AddminloginComponent } from './components/admin/addminlogin/addminlogin.component';
import { AddminregistrationComponent } from './components/admin/addminregistration/addminregistration.component';
import { UpdateMenuComponent } from './components/updatemenu/updatemenu.component';
import { OrderListComponent } from './components/admin/order-list/order-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    LoginComponent,
    RegistrationComponent,
    MenuComponent,
    CartComponent,
    FoodFormComponent,
    OrderformComponent,
    OrderConfirmComponent,
    AddminloginComponent,
    AddminregistrationComponent,
    UpdateMenuComponent,
    OrderListComponent,
    FooterComponent,
    DashbordComponent,
  
    
   
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
