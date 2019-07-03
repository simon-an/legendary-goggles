import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SafeService } from '~core/services';
import { Observable } from 'rxjs';
import { Safe } from '~core/model';

@Component({
  selector: 'cool-safe-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLandingPageComponent implements OnInit {
  safeId: string;

  constructor() {}

  ngOnInit() {
    this.safeId = localStorage.getItem('safeId');
  }
}
