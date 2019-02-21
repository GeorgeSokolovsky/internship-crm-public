import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../../data/arcticle';
import { ArticleService } from '../../article.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {
  article: Article;
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articalService: ArticleService,
    private cdr: ChangeDetectorRef,
  ) {}

  goBack() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.articalService
      .getById(this.route.snapshot.paramMap.get('id'))
      .pipe(takeUntil(this.destroy$))
      .subscribe(article => {
        this.article = article;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
