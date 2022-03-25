import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthserviceService) { }

  ngOnInit(): void {
  }

  logout():void{
    this.auth.logout();
  }

}
