import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '~layout/layout.module';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [HomeLandingPageComponent],
  imports: [CommonModule, LayoutModule, HomeRoutingModule, MatListModule],
  exports: [LayoutModule],
})
export class HomeModule {}
