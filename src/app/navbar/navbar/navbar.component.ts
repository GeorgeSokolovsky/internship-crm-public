import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Category } from '../../data/category';
import { CategoryService } from '../../services/category.service';
import { SelectCategoryService } from '../../services/select-category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, OnDestroy {
  categories: Category[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private categoryService: CategoryService,
    private cdr: ChangeDetectorRef,
    private selectService: SelectCategoryService,
    private router: Router,
  ) {}

  selectCategory(category) {
    this.router.navigate(['articles']);
    this.selectService.category$.next(category);
  }

  ngOnInit() {
    this.categoryService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe(categories => {
        this.selectService.category$.next(categories[0]);
        this.categories = categories;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
