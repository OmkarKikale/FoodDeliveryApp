import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { User } from './components/comman/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserservieService {
 
  private userUrl="http://localhost:8080/controll/list";
  private newuserurl = "http://localhost:8080/controll/saveuser";
  private loginurl = "http://localhost:8080/controll/login";


   constructor(private http: HttpClient) {}

   getlogin(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.loginurl}`, user);
  }
   updateUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.put<User>(this.userUrl + `/${user.eluser_id}`, user, httpOptions);
  }

  
  ///user Maintainance

  saveUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<User>(this.newuserurl, user, httpOptions);
  }
 
}
