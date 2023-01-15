import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Grade } from 'src/app/models/grade';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-manage-grades',
  templateUrl: './manage-grades.component.html',
  styleUrls: ['./manage-grades.component.css'],
  providers: [ ApiConnectionService ]
})
export class ManageGradesComponent {

  constructor(private apiService: ApiConnectionService, private router: Router) { }

  grades: Grade[] = [];
  value: number = 0;
  subjectId: number = 1;
  teacherId: number = 1;
  studentId: number = 1;

  ngOnInit() {
    this.apiService.getAllGrades().subscribe((data: any) => {
      this.grades = data;
    });
  }

  addNewGrade() {
    this.apiService.addNewGrade(this.value, this.subjectId, this.teacherId, this.studentId).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/home-page']);
    })
  }

}
