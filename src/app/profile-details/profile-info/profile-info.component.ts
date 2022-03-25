import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  id:any;
  data:any;
  name:any;
  uname:string='';
  constructor(private user:UsersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.getuserbyid();
}

  getuserbyid(){
    this.data=this.user.getOneUser(this.id).subscribe(res=>
      {
        this.data=res;
        this.name=res.name;
        this.uname=res.username;
      })
  }
}