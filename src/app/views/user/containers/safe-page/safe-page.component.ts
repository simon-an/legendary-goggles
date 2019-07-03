import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SafeService } from '~core/services';
import { Observable } from 'rxjs';
import { Safe } from '~core/model';

@Component({
  selector: 'cool-safe-safe-page',
  templateUrl: './safe-page.component.html',
  styleUrls: ['./safe-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafePageComponent implements OnInit {
  safe$: Observable<Safe>;
  constructor(private safeService: SafeService) {}

  ngOnInit() {
    this.safe$ = this.safeService.getSafe('1');
  }
}
