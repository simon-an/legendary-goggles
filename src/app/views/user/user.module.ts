import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LayoutModule } from '~layout/layout.module';
import { SafeModule } from '~safe/safe.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';

@NgModule({
  declarations: [UserLandingPageComponent],
  imports: [CommonModule, LayoutModule, SafeModule, UserRoutingModule],
  exports: [LayoutModule],
})
export class UserModule {}
