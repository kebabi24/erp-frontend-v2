import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../../../environments/environment';
import { AuthModel } from '../../models/auth.model';

const API_USERS_URL = `${environment.apiUrl}/auth`;

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  constructor(private http: HttpClient) {}

  // public methods
  login(userName: string, password: string): Observable<any> {
    return this.http.post(`${API_USERS_URL}/login`, {
      userName,
      password,
    });
  }
  login1(userName: string, password: string) {
    // const httpHeaders = this.httpUtils.getHTTPHeaders()
    console.log(API_USERS_URL);
    return this.http.post(`${API_USERS_URL}/login`, { userName, password });
  }
  // CREATE =>  POST: add a new user to the server
  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(API_USERS_URL, user);
  }

  // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
  forgotPassword(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${API_USERS_URL}/forgot-password`, {
      email,
    });
  }

  getUserByToken(token: string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${API_USERS_URL}/me`, {
      headers: httpHeaders,
    });
  }
}
