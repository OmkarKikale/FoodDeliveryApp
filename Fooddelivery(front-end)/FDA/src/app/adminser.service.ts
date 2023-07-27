import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foodservice } from './components/comman/foodservice';
import { Admin } from './components/comman/admin';
import { OderDetails } from './components/comman/oder-details';

@Injectable({
  providedIn: 'root'
})
export class AdminserService {
  
  private apiUrl = 'http://localhost:8080/api/menu';
  productId: any;
  productDiscountedPrice: any;

  private userUrl="http://localhost:8080/controll/list";
  private newuserurl = "http://localhost:8080/control/saveuser";
  private loginur2 = "http://localhost:8080/control/login";

  private baseUrl = 'http://localhost:8080/List';
  private apiUr = 'http://localhost:8080/dilivery';

  constructor(private http: HttpClient) {}

 

  addMenuItem(menuItem: Foodservice): Observable<void> {
    return this.http.post<void>(this.apiUrl, menuItem);
  }


  getlogin(user: Admin): Observable<Admin> {
    console.log(user);
    return this.http.post<Admin>(`${this.loginur2}`, user);
  }
   updateUser(user: Admin): Observable<Admin> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.put<Admin>(this.userUrl + `/${Admin.admin_id}`, user, httpOptions);
  }

  
  ///user Maintainance

  saveUser(admin: Admin): Observable<Admin> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<Admin>(this.newuserurl, admin, httpOptions);
  }

  getMenuItems(): Observable<Foodservice[]> {
    return this.http.get<Foodservice[]>(this.apiUrl);
  }

  updateMenuItem(id: number, updatedMenu: Foodservice): Observable<Foodservice> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Foodservice>(url, updatedMenu);
  }



  getAllOrders(): Observable<OderDetails[]> {
    return this.http.get<OderDetails[]>(this.baseUrl);
  }

  deleteMenuItem(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
 
  markOrderAsDelivered(id: number): Observable<any> {
    const url = `${this.apiUr}/${id}`;
    return this.http.get(url, {});
  }
}
