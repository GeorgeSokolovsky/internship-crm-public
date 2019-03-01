import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Comment } from '../../data/comment';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleCommentComponent {
  @Input() comment: Comment;
}
