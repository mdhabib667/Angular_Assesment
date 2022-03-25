import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../guard/authguard.guard';
import { PostComponent } from './post/post.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { UserAlbumComponent } from './user-album/user-album.component';

const routes: Routes = [
  {path:'',component:ProfileInfoComponent,canActivate:[AuthguardGuard]},
  {path:'useralbum',component:UserAlbumComponent,canActivate:[AuthguardGuard]},
  {path:'post',component:PostComponent,canActivate:[AuthguardGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileDetailsRoutingModule { }
