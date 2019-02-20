import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../../data/arcticle';

@Component({
  selector: 'app-short-article',
  templateUrl: './short-article.component.html',
  styleUrls: ['./short-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortArticleComponent {
  @Input() article: Article;
  maxContentLength: number = 100;
}
