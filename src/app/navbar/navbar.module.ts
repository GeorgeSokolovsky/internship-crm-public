import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
} from '@angular/material';
import { AppRoutingModule } from '../routes/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthControlComponent } from './auth-control/auth-control.component';

@NgModule({
  declarations: [NavbarComponent, AuthControlComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
