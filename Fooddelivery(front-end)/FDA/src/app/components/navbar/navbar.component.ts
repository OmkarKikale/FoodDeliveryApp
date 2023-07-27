import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Auth2Service } from 'src/app/auth2.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authService: AuthService ,
    private router: Router,
    public auths :Auth2Service) {}

  logout() {
    this.authService.logout();
    alert("logout sucseesfull");
    this.router.navigateByUrl('/adminlog');
  }

logout2(){

  this.auths.logout();
  alert("logout sucseesfull");
    this.router.navigateByUrl('/login');
  
}
  

}
