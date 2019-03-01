import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { SharedPipesModule } from '../shared/shared-pipes.module';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [ArticleDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SharedPipesModule,
    CommentsModule,
  ],
  exports: [ArticleDetailsComponent],
})
export class ArticleDetailsModule {}
