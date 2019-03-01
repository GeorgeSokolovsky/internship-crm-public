import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent {
  isAuth$: Observable<boolean> = this.authService.isAuth$;

  constructor(private authService: AuthService) {}
}
