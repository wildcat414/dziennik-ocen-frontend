import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.css'],
  providers: [ ApiConnectionService ]
})
export class ManageSubjectsComponent {

  constructor(private apiService: ApiConnectionService, private router: Router) { }

  subjects: Subject[] = [];
  name: string = "";
  authorId: number = 1;

  ngOnInit() {
    this.apiService.getAllSubjects().subscribe((data: any) => {
      this.subjects = data;
    });
  }

  addNewSubject() {
    this.apiService.addNewSubject(this.name, this.authorId).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/home-page']);
    })
  }

}
