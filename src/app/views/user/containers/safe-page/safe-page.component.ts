import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SafeService } from '~core/services';
import { Observable } from 'rxjs';
import { Safe, SafeItem } from '~core/model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap, shareReplay, withLatestFrom, concatMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { AddSafeItemDialogComponent } from '../add-safe-item-dialog/add-safe-item-dialog.component';

@Component({
  selector: 'cool-safe-safe-page',
  templateUrl: './safe-page.component.html',
  styleUrls: ['./safe-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafePageComponent implements OnInit {
  safe$: Observable<Safe>;
  items$: Observable<SafeItem[]>;
  safeId$: Observable<string>;

  constructor(
    private safeService: SafeService,
    private activeRoute: ActivatedRoute,
    private matDialogService: MatDialog,
  ) {}

  ngOnInit() {
    this.safeId$ = this.activeRoute.paramMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('id')),
    );
    this.safe$ = this.safeId$.pipe(
      switchMap((safeId: string) => {
        return this.safeService.getSafe(safeId);
      }),
      shareReplay(1),
    );
    this.items$ = this.safeId$.pipe(
      concatMap((safeId: string) => {
        return this.safeService.getItems(safeId);
      }),
      shareReplay(1),
    );
  }

  openAddNewItemDialog() {
    const dialogRef = this.matDialogService.open<
      AddSafeItemDialogComponent,
      any,
      SafeItem
    >(AddSafeItemDialogComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef
      .afterClosed()
      .pipe(withLatestFrom(this.safeId$))
      .subscribe(([safeItem, safeId]: [SafeItem, string]) => {
        console.log('addItem to safeService', safeItem, safeId);
        this.safeService.addItem(safeId, safeItem);
      });
  }
}
