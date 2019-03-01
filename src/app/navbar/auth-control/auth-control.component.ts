import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-control',
  templateUrl: './auth-control.component.html',
  styleUrls: ['./auth-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthControlComponent implements OnInit {
  isAuth$: Subject<boolean> = this.authService.isAuth$;
  currentUser$: Subject<string> = this.authService.currentUser$;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.checkSession();
  }

  toAuth() {
    this.router.navigateByUrl('/auth');
  }

  logOut() {
    this.authService.logOut();
  }
}
