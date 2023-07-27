import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservieService } from 'src/app/userservie.service';
import { User } from '../../comman/user';

import { Auth2Service } from 'src/app/auth2.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User(0, '', '', '', '', '', '');


  constructor(
    private es: UserservieService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private authService2 :Auth2Service
  ) {}

  newregistration() {
    this.router.navigate(['/register']);
  }

  // getLogin(): void {
  //   this.es.getlogin(this.user).subscribe(
  //     (data: any) => {
  //       if (data) {
  //         this.authService2.login();
  //         alert('Login Successful');
  //         console.log('login response', data);
    
  //         // sessionStorage.setItem('user', JSON.stringify(data));
    
  //         this.router.navigateByUrl('/menu');
  //       } else {
  //         alert('Sorry invalid username or password');
  //       }
  //     },
     
  //   );
  // }
  getLogin(): void {
    this.es.getlogin(this.user).subscribe(
      (data: any) => {
        if (data) {
          this.authService2.login();
          alert('Login Successful');
          console.log('login response', data);
          // sessionStorage.setItem('user', JSON.stringify(data));
          this.router.navigateByUrl('/menu');
        } else {
          // Handle the case when the response data is falsy (e.g., empty or null)
          alert('Sorry invalid username or password');
        }
      },
      (error: any) => {
        // Handle the error case when the login request fails
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again later.');
      }
    );
  }
  
  
}
