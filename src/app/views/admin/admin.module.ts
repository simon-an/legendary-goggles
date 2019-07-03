import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from '~layout/layout.module';
import { SafeModule } from '~safe/safe.module';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';
import { SafeListComponent } from './container/safe-list/safe-list.component';
import { SafeListElementComponent } from './container/safe-list-element/safe-list-element.component';
import { SafeRowComponent } from './components/safe-row/safe-row.component';
import { MatListModule, MatIconModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [AdminLandingPageComponent, SafeListComponent, SafeListElementComponent, SafeRowComponent],
  imports: [CommonModule, LayoutModule, SafeModule, AdminRoutingModule, MatListModule, MatIconModule, MatTooltipModule],
  exports: [LayoutModule, SafeListElementComponent, SafeRowComponent],
})
export class AdminModule {}
