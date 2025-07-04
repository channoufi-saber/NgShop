import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LocalstorageService } from '../services/localstorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public  apiURLUsers = 'http://localhost:3000/api/v1/users'

  constructor(private http:HttpClient,private token:LocalstorageService,private router:Router) { }

  login(email:string,password:string):Observable<User>{
    return this.http.post<User>(`${this.apiURLUsers}/login`,{email,password})
  }

  logout(){
    this.token.removeToken()
    this.router.navigate(['/login'])
  }
}
