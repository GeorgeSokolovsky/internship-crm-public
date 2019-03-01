import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommentService } from '../../services/comment.service';
import { SocketService } from '../../services/socket.service';
import { Comment } from '../../data/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentListComponent implements OnInit, OnDestroy {
  commentList: Comment[];
  private articleId = this.route.snapshot.paramMap.get('id');
  private readonly detsroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private commentService: CommentService,
    private socketService: SocketService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.commentService
      .getAll(this.articleId)
      .pipe(takeUntil(this.detsroy$))
      .subscribe(comments => {
        this.commentList = comments;
        this.cdr.markForCheck();
      });

    this.socketService.connect(this.articleId);
    this.socketService
      .on('newComment')
      .pipe(takeUntil(this.detsroy$))
      .subscribe(comment => {
        this.commentList.push(comment);
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    this.detsroy$.next();
    this.detsroy$.complete();
  }
}
