import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Article } from 'src/app/mock.news';

@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.component.html',
  styleUrls: ['./short-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortNewsComponent {
  @Input() article: Article;
}
