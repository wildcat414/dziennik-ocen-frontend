import { Component } from '@angular/core';
import { Subject } from 'src/app/models/subject';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.css'],
  providers: [ ApiConnectionService ]
})
export class ManageSubjectsComponent {

  constructor(private apiService: ApiConnectionService) { }

  subjects: Subject[] = [];

  ngOnInit() {
    this.apiService.getAllSubjects().subscribe((data: any) => {
      this.subjects = data;
    });
  }

}
