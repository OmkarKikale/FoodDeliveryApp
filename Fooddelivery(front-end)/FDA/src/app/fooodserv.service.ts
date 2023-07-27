import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foodservice } from './components/comman/foodservice';
import { OderDetails } from './components/comman/oder-details';
@Injectable({
  providedIn: 'root'
})
export class FooodservService {
  createTransaction(amount: number) {
    throw new Error('Method not implemented.');
  }
  placeOrder(orderDetails: any, isSingleProductCheckout: any) {
    throw new Error('Method not implemented.');
  }
 

  private apiUrl = 'http://localhost:8080/api/foods'; // Replace with your backend API URL
  // private apiUr2 = 'http://localhost:8080/api/submitOrder';
  private apiUr2='http://localhost:8080/orders';

  constructor(private http: HttpClient) { }



  

  getFoodList(): Observable<Foodservice[]> {
    return this.http.get<Foodservice[]>(this.apiUrl);
    
  }

  addToCart(f: Foodservice): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, f);


  }

  // updateFood(id: number, updatedFood: Foodservice): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${id}`, updatedFood);
  // }

  deleteFood(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // addFood(food: Foodservice): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, food);
  // }
  submitOrder(order: OderDetails): Observable<string> {
    return this.http.post<string>(this.apiUr2, order);
  }
  

}
export interface OrderResponse {
  message: string;
  totalQuantity: number;
  totalPrice: number;
}
