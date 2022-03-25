import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDetailsRoutingModule } from './profile-details-routing.module';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { PostComponent } from './post/post.component';
import { UserAlbumComponent } from './user-album/user-album.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ProfileInfoComponent,
    PostComponent,
    UserAlbumComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ProfileDetailsRoutingModule
  ]
})
export class ProfileDetailsModule { }
