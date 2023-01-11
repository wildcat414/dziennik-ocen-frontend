import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable()
export class ApiConnectionService {

  constructor(private http: HttpClient) { }

  apiConstPartUrl = 'http://localhost:8080/api/';
  userApiUrl = this.apiConstPartUrl + 'user';
  gradeApiUrl = this.apiConstPartUrl + 'grade';
  subjectApiUrl = this.apiConstPartUrl + 'subject';

  getAllUsers() {
    return this.http.get<User>(this.userApiUrl + '/');
  }

  getAllSubjects() {
    return this.http.get<User>(this.subjectApiUrl + '/');
  }

}
