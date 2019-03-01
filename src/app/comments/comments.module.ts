import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';
import { CommentsComponent } from './comments.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentingComponent } from './commenting/commenting.component';
import { SingleCommentComponent } from './single-comment/single-comment.component';

@NgModule({
  declarations: [
    CommentsComponent,
    CommentListComponent,
    CommentingComponent,
    SingleCommentComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [CommentsComponent],
})
export class CommentsModule {}
