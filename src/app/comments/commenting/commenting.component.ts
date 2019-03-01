import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
@Component({
  selector: 'app-commenting',
  templateUrl: './commenting.component.html',
  styleUrls: ['./commenting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentingComponent implements OnInit, OnDestroy {
  commentingForm: FormControl;
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.commentingForm = new FormControl('', Validators.required);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  addComment() {
    this.commentService
      .addComment({
        content: this.commentingForm.value,
        articleId: this.route.snapshot.paramMap.get('id'),
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.commentingForm.reset();
      });
  }
}
