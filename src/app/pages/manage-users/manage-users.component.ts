import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
  providers: [ ApiConnectionService ]
})
export class ManageUsersComponent implements OnInit {

  constructor(private apiService: ApiConnectionService) { }

  users: User[] = [];

  ngOnInit() {
    this.apiService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

}
