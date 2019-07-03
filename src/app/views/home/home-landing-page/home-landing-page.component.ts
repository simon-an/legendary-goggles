import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '~core/services/auth.service';

@Component({
  selector: 'cool-safe-home-landing-page',
  templateUrl: './home-landing-page.component.html',
  styleUrls: ['./home-landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLandingPageComponent implements OnInit {
  constructor(authService: AuthService) {
    if (Math.random() * 10 > 5) {
      authService
        .login({ email: 'simon@metafinanz.de', role: 'Customer' })
        .subscribe(user => {
          console.log('login as ', user.role);
        });
    } else {
      authService
        .login({
          email: 'simon@metafinanz.de',
          role: 'Administrator',
        })
        .subscribe(user => {
          console.log('login as ', user.role);
        });
    }
    authService
      .getCurrentUser()
      .subscribe(user => console.log('current user', user));
  }

  ngOnInit() {
    localStorage.setItem('safeId', '1');
  }
}
