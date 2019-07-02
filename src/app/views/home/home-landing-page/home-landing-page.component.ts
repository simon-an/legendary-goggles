import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cool-safe-home-landing-page',
  templateUrl: './home-landing-page.component.html',
  styleUrls: ['./home-landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
