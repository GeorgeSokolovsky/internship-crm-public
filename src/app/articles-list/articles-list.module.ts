import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatTableModule } from '@angular/material';

import { ArticlesTableComponent } from './articles-table/articles-table.component';
import { ShortArticleComponent } from './short-article/short-article.component';
import { AppRoutingModule } from '../routes/app-routing.module';
import { SharedPipesModule } from '../shared/shared-pipes.module';

@NgModule({
  declarations: [ArticlesTableComponent, ShortArticleComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    SharedPipesModule,
    AppRoutingModule,
  ],
  exports: [ArticlesTableComponent],
})
export class ArticlesListModule {}
