import { Component, Input, OnInit } from '@angular/core';

import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() 
  name:any;
  @Input()
  username:any;


  constructor(private auth:AuthserviceService) { }

  ngOnInit(): void {
  }

  logout():void{
    this.auth.logout();
  }

}
