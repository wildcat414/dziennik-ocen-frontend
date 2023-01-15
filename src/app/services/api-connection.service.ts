import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable()
export class ApiConnectionService {

  constructor(private http: HttpClient) { }

  currentAccessToken = "";

  apiConstPartUrl = 'http://localhost:8080/api/';
  userApiUrl = this.apiConstPartUrl + 'user';
  gradeApiUrl = this.apiConstPartUrl + 'grade';
  subjectApiUrl = this.apiConstPartUrl + 'subject';

  getAllUsers() {
    return this.http.get<User>(this.userApiUrl + '/');
  }

  addNewUser(firstName: string, lastName: string, login: string, password: string) {
    return this.http.post<any>(this.userApiUrl + '/', { firstName: firstName, lastName: lastName, role: "STUDENT", login: login, passwordHash: password });
  }

  loginUser(login: string, password: string) {
    return this.http.post<any>(this.userApiUrl + '/authentication', { login: login, password: password });
  }

  getAllSubjects() {
    return this.http.get<User>(this.subjectApiUrl + '/');
  }

}
