import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{UsersService} from 'src/app/services/users.service'
@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.css']
})
export class UserAlbumComponent implements OnInit {

  id:any;
  albumData:any;
  
  constructor(private user:UsersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.getUserAlbumId();
    
  }
  getUserAlbumId(){
    this.albumData=this.user.getAlbums(this.id).subscribe(res=>{
      this.albumData=res;
    })
  }
}
