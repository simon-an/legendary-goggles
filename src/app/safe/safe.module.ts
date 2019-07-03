import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list/item-list.component';
import { MatListModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { CutterPipe } from './cutter.pipe';

@NgModule({
  declarations: [ItemListComponent, CutterPipe],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [ItemListComponent]
})
export class SafeModule { }
