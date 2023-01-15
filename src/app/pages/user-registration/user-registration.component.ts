import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  providers: [ ApiConnectionService ]
})
export class UserRegistrationComponent {

  constructor(private apiService: ApiConnectionService, private router: Router) { }
  
  name: string = "";
  surname: string = "";
  login: string = "";
  password: string = "";

  registerUser() {
    this.apiService.addNewUser(this.name, this.surname, this.login, this.password).subscribe((data: any) => {
      this.router.navigate(['/home-page'])
    });
  }
}
