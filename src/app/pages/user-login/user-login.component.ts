import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [ ApiConnectionService ]
})
export class UserLoginComponent {

  constructor(private apiService: ApiConnectionService, private router: Router) { }

  login: string = "";
  password: string = "";

  loginUser() {
    this.apiService.loginUser(this.login, this.password).subscribe((data: any) => {
      console.log(data);
      this.apiService.currentAccessToken = data.accessToken;
      this.router.navigate(['/home-page'])
    });
  }
}
