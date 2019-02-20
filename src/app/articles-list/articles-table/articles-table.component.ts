import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { Article } from '../../data/arcticle';
import { ArticleService } from '../../article.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-articles-table',
  templateUrl: './articles-table.component.html',
  styleUrls: ['./articles-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesTableComponent implements OnInit, OnDestroy {
  dataSource: Article[];
  displayedColumns: string[] = ['article'];
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private articleService: ArticleService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.articleService.getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe(articles => {
        this.dataSource = articles;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
