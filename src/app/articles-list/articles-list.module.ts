import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatTableModule } from "@angular/material";

import { ArticlesTableComponent } from "./articles-table/articles-table.component";
import { ShortArticleComponent } from "./short-article/short-article.component";
import { AppRoutingModule } from "../routes/app-routing.module";
import { ShortenPipe } from "../pipes/shorten.pipe";

@NgModule({
  declarations: [ArticlesTableComponent, ShortArticleComponent, ShortenPipe],
  imports: [CommonModule, MatTableModule, MatCardModule, AppRoutingModule],
  exports: [ArticlesTableComponent]
})
export class ArticlesListModule {}
