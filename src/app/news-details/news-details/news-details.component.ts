import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy
} from "@angular/core";
import { Location } from "@angular/common";
import { Article } from "src/app/mock.news";
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from "../../article.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-news-details",
  templateUrl: "./news-details.component.html",
  styleUrls: ["./news-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsDetailsComponent implements OnInit, OnDestroy {
  article: Article;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private articalService: ArticleService,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.articalService
      .getById(this.route.snapshot.paramMap.get("id"))
      .subscribe(article => {
        this.article = article;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
