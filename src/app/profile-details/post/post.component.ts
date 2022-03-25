import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id:any;
  postdata:any;
  constructor(private user:UsersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getPostById();
  }

  getPostById(){
    this.user.getPosts(this.id).subscribe(res=>{
      this.postdata=res;
    })
  }

}
