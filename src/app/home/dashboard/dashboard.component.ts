import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:any;
  searchText:any;
  constructor(private userdetails:UsersService) { }

  ngOnInit(): void {
    this.userdetails.getUsers().subscribe(data=>{
      this.users=data;
    })
  }

  
  
}
