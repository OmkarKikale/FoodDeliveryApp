import { Component } from '@angular/core';
import { Admin } from '../../comman/admin';
import { AdminserService } from 'src/app/adminser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-addminlogin',
  templateUrl: './addminlogin.component.html',
  styleUrls: ['./addminlogin.component.css']
})
export class AddminloginComponent {
  admin: Admin = new Admin(0, '', '', '', '', '');

  constructor(
    private es: AdminserService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private authService: AuthService,
  ) {}




  newregistration() {
    this.router.navigate(['/adminregister']);
  }

  getLogin(): void {
    this.es.getlogin(this.admin).subscribe(
      (data: any) => {
        if (data) {
         
          this.authService.login();
          alert('Login Successful');
          console.log('login response', data);
    
          // sessionStorage.setItem('user', JSON.stringify(data));
    
          this.router.navigateByUrl('/admindash');
        } else {
          alert('Sorry, invalid username or password');
        }
      },
     
    );
  }
}
