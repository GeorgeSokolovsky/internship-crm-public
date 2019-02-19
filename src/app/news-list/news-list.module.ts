import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatTableModule } from "@angular/material";

import { NewsTableComponent } from './news-table/news-table.component';
import { ShortNewsComponent } from './short-news/short-news.component';
import { AppRoutingModule } from '../routes/app-routing.module';

@NgModule({
  declarations: [NewsTableComponent, ShortNewsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    AppRoutingModule
  ],
  exports: [NewsTableComponent]
})
export class NewsListModule { }
