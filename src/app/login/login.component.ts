import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform=new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }
  onSubmit(): void{
    console.log(this.loginform.value)
    if(this.loginform.valid){
      this.auth.login(this.loginform.value).subscribe(
        (result)=>{
          console.log(result);
          this.router.navigate(['/home']);

        },
        (err:Error)=>{
          alert(err.message);
        }
        )
    }
  }
}
