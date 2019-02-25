import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Article } from '../../data/arcticle';
import { ArticleService } from '../../services/article.service';
import { Subject } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { SelectCategoryService } from 'src/app/services/select-category.service';

@Component({
  selector: 'app-articles-table',
  templateUrl: './articles-table.component.html',
  styleUrls: ['./articles-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesTableComponent implements OnInit, OnDestroy {
  category: string;
  dataSource: Article[];
  displayedColumns: string[] = ['article'];
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private articleService: ArticleService,
    private cdr: ChangeDetectorRef,
    private selectService: SelectCategoryService,
  ) {}

  ngOnInit() {
    this.selectService.category$
      .pipe(
        switchMap(
          category => this.articleService.getAll(category._id),
          (category, articles) => ({ category, articles }),
        ),
        takeUntil(this.destroy$),
      )
      .subscribe(({ category, articles }) => {
        this.dataSource = articles;
        this.category = category.name;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
