import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router:Router) { }
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

  login({ email, password }: any): Observable<any> {
    if (password === 'pass@123') {
      this.setToken('static_token');
      return of({ password: 'pass@123'});
    }
    return throwError(Error('Wrong Username or Password'));
  }
}
