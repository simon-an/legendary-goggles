import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LayoutModule } from '~layout/layout.module';
import { SafeModule } from '~safe/safe.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { SafePageComponent } from './containers/safe-page/safe-page.component';
import { MatListModule, MatDividerModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [UserLandingPageComponent, SafePageComponent],
  imports: [CommonModule, LayoutModule, SafeModule, UserRoutingModule, MatListModule, MatDividerModule, MatIconModule],
  exports: [LayoutModule, SafePageComponent],
})
export class UserModule {}
