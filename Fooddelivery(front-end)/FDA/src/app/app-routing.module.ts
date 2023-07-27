import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/UserModel/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegistrationComponent } from './components/UserModel/registration/registration.component';
import { MenuComponent } from './components/menu/menu.component';


import { CartComponent } from './components/cart/cart.component';
import { FoodFormComponent } from './components/food-form/food-form.component';
import { OrderformComponent } from './components/orderform/orderform.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';
import { AddminregistrationComponent } from './components/admin/addminregistration/addminregistration.component';
import { AddminloginComponent } from './components/admin/addminlogin/addminlogin.component';
import { UpdateMenuComponent } from './components/updatemenu/updatemenu.component';
import { OrderListComponent } from './components/admin/order-list/order-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AuthGuard } from './auth.guard';
import { Auth2Guard } from './auth2.guard';

const routes: Routes = [{ path: '', redirectTo: 'main', pathMatch: 'full' },
{path:'login',component:LoginComponent},
{path:'main',component:MainPageComponent},
{path:'register',component:RegistrationComponent},
{path:'menu',component:MenuComponent},
{path : 'adminregister', component :AddminregistrationComponent},
{path :'adminlog',component:AddminloginComponent},
{path : 'footer', component :FooterComponent},
{path : 'admindash', component :DashbordComponent,canActivate: [AuthGuard]},

  {path : 'updatemenu', component:UpdateMenuComponent,canActivate: [AuthGuard]},
  { path: 'admin', component: FoodFormComponent, canActivate: [AuthGuard] },
  { path: 'orderlist', component: OrderListComponent, canActivate: [AuthGuard] },

  { path: 'orderform', component: OrderformComponent, canActivate: [Auth2Guard] },
  { path: 'cart', component: CartComponent, canActivate: [Auth2Guard] },
  { path: 'orderconfirm', component: OrderConfirmComponent, canActivate: [Auth2Guard] },

  // { path: 'orderform', component:OrderformComponent },

// { path : 'cart',component:CartComponent},
// {path:'admin',component:FoodFormComponent},
// {path :'orderconfirm',component : OrderConfirmComponent},
// {path :'orderlist', component:OrderListComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
