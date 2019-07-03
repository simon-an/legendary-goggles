import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LayoutModule } from '~layout/layout.module';
import { SafeModule } from '~safe/safe.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { SafePageComponent } from './containers/safe-page/safe-page.component';
import {
  MatListModule,
  MatDividerModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { AddSafeItemDialogComponent } from './containers/add-safe-item-dialog/add-safe-item-dialog.component';
import { SafeItemFormComponent } from './components/safe-item-form/safe-item-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserLandingPageComponent,
    SafePageComponent,
    AddSafeItemDialogComponent,
    SafeItemFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    SafeModule,
    UserRoutingModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [LayoutModule, SafePageComponent, AddSafeItemDialogComponent, SafeItemFormComponent],
  entryComponents: [AddSafeItemDialogComponent],
})
export class UserModule {}
