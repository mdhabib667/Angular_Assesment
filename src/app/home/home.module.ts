import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipe/filter.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FilterPipe,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    FormsModule,
    MatCardModule
  ]
})
export class HomeModule { }
