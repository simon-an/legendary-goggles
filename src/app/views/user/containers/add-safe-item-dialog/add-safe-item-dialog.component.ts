import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SafeItem } from '~core/model';

@Component({
  selector: 'cool-safe-add-safe-item-dialog',
  templateUrl: './add-safe-item-dialog.component.html',
  styleUrls: ['./add-safe-item-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddSafeItemDialogComponent implements OnInit {
  constructor(
    private matDialogRef: MatDialogRef<AddSafeItemDialogComponent, SafeItem>,
  ) {}

  ngOnInit() {}

  addSafeItem(item: SafeItem) {
    this.matDialogRef.close(item);
  }
}
