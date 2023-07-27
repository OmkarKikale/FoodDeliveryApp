import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  getIsAuthenticated2: any;

  constructor() { }

  login() {
    
    this.isAuthenticated = true;
  }

  logout() {
   
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  
  

}
