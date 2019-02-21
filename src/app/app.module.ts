import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListModule } from './articles-list/articles-list.module';
import { ArticleDetailsModule } from './article-details/article-details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ArticlesListModule,
    ArticleDetailsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
