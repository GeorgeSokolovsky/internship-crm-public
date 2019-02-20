import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [ArticleDetailsComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [ArticleDetailsComponent]
})
export class ArticleDetailsModule {}
