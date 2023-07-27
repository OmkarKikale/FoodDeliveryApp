import { Component } from '@angular/core';
import { Admin } from '../../comman/admin';
import { AdminserService } from 'src/app/adminser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addminregistration',
  templateUrl: './addminregistration.component.html',
  styleUrls: ['./addminregistration.component.css']
})
export class AddminregistrationComponent {

  admin: Admin = new Admin(0, '', '', '', '', '');

  constructor(private es : AdminserService ,private router:Router){}
  SaveUsers() {
    if (this.es) {
      this.es.saveUser(this.admin).subscribe(
        () => {
          alert("Successfully registered!");
          this.router.navigateByUrl("/adminlog");
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
