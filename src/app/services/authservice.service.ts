import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router:Router,public users:UsersService) { }
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
    
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  useremail:any=[];
  getemail(){
    this.users.getUsers().subscribe(data=>{
    console.log(data)
    })
  
  }
  

  login({ email, password }: any): Observable<any> {
    this.getemail()
    if (password === 'pass@123') {
      this.setToken('static_token');
      return of({ password: 'pass@123'});
    }
    return throwError(Error('Wrong Username or Password'));
  }
}
