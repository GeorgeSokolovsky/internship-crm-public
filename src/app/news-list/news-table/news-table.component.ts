import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy
} from "@angular/core";
import { Article } from "src/app/mock.news";
import { ArticleService } from "src/app/article.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-news-table",
  templateUrl: "./news-table.component.html",
  styleUrls: ["./news-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsTableComponent implements OnInit, OnDestroy {
  dataSource: Article[];
  displayedColumns: string[] = ["article"];
  private subscription: Subscription;

  constructor(
    private articleService: ArticleService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.articleService.getAll().subscribe(articles => {
      this.dataSource = articles;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
