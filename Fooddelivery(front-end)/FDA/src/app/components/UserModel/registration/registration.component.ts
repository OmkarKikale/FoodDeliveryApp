import { Component, OnInit } from '@angular/core';
import { User } from '../../comman/user';
import { UserservieService } from 'src/app/userservie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User(0, "", "", "", "", "", "");

  constructor(private es : UserservieService ,private router:Router){}

  ngOnInit(): void {
    // Implementation for ngOnInit
  }

  // SaveUsers() {
  //   this.es.saveUser(this.user).subscribe(
  //     () => {
  //       alert("Successfully registered!");
  //       this.router.navigateByUrl("/login");
  //     },
  //     () => {
  //       alert("Enter the user data.");
  //     }
  //   );
  // }
  SaveUsers() {
    if (this.user) {
      this.es.saveUser(this.user).subscribe(
        () => {
          alert("Successfully registered!");
          this.router.navigateByUrl("/login");
        },
        () => {
          alert("Failed to save user data.");
        }
      );
    } else {
      alert("Enter the user data.");
    }
  }
  
}
