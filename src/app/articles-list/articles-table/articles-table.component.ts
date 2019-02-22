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
          category => {
            return this.articleService.getAll(category._id);
          },
          (category, articles) => {
            this.dataSource = articles;
            this.cdr.markForCheck();
            return category;
          },
        ),
        takeUntil(this.destroy$),
      )
      .subscribe(category => {
        this.category = category.name;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
