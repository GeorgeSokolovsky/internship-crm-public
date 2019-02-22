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
import { takeUntil } from 'rxjs/operators';
import { SelectCategoryService } from 'src/app/services/select-category.service';
import { Category } from 'src/app/data/category';

@Component({
  selector: 'app-articles-table',
  templateUrl: './articles-table.component.html',
  styleUrls: ['./articles-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesTableComponent implements OnInit, OnDestroy {
  category: Category;
  dataSource: Article[];
  displayedColumns: string[] = ['article'];
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private articleService: ArticleService,
    private cdr: ChangeDetectorRef,
    private selectService: SelectCategoryService,
  ) {}

  ngOnInit() {
    this.category = this.selectService.currentCategory;
    if (this.category) {
      this.getArticles();
    }

    this.selectService.category$.subscribe(category => {
      this.destroy$.next(true);
      this.category = category;
      this.getArticles();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private getArticles() {
    this.articleService
      .getAll(this.category.name)
      .pipe(takeUntil(this.destroy$))
      .subscribe(articles => {
        this.dataSource = articles;
        this.cdr.markForCheck();
      });
  }
}
