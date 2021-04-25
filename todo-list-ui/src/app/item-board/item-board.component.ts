import {ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ItemService} from '../service/item.service';
import {finalize, take} from 'rxjs/operators';
import {ItemStatus} from '../model/item-status.enum';
import {MatDialog} from '@angular/material/dialog';
import {CdkDragDrop, transferArrayItem} from '@angular/cdk/drag-drop';
import {ItemSaveDialogComponent} from '../item-save-dialog/item-save-dialog.component';
import {MapUtils} from '../utils/map-utils';
import {Item} from '../model/item';

@Component({
  selector: 'app-item-board',
  templateUrl: './item-board.component.html',
  styleUrls: ['./item-board.component.scss'],
})
export class ItemBoardComponent implements OnInit, OnDestroy {

  private eventSource: EventSource;

  ItemStatus = ItemStatus;
  statusItemsMap = new Map<string, Item[]>();
  actionInProgress = false;
  dragAndDropInProgress = false;

  constructor(private readonly itemService: ItemService,
              private readonly changeDetector: ChangeDetectorRef,
              private readonly dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.refresh();
    this.startEventListener();
  }

  ngOnDestroy(): void {
    this.stopEventListener();
  }

  // ---------------------------------------------------------------------------------------
  // Enable this code to solve the issue of the maximum number of SSE
  // Drawback: data modifications are visible only when the user has the focus on the tab
  // ---------------------------------------------------------------------------------------
  // @HostListener('window:focus', ['$event'])
  // onFocus(event: any): void {
  //   this.refresh();
  //   this.startEventListener();
  // }
  //
  // @HostListener('window:blur', ['$event'])
  // onBlur(event: any): void {
  //   this.stopEventListener();
  // }

  refresh() {
    this.actionInProgress = true;

    // Clear all statuses
    for (const status of this.getStatuses()) {
      this.statusItemsMap.set(status, []);
    }

    this.itemService.findAll()
      .pipe(finalize(() => {
        this.stopActionInProgress();
      }))
      .subscribe(item => {
        this.addItem(item);
      });
  }

  getStatuses(): Array<string> {
    return Object.keys(ItemStatus);
  }

  add() {
    this.startActionInProgress();

    const dialogRef = this.dialog.open(ItemSaveDialogComponent, {
      width: '650px',
      disableClose: true
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe((response) => {
      if (response) {
        this.itemService.addItem(response)
          .pipe(finalize(() => { this.stopActionInProgress(); }))
          .subscribe();
      } else {
        this.stopActionInProgress();
      }
    });
  }

  drop(event: CdkDragDrop<any, any>) {
    if (event.previousContainer !== event.container) {

      this.startActionInProgress();

      // New status
      const newStatus = MapUtils.findKeyByValue(this.statusItemsMap, event.container.data);

      // Moved item
      const item = event.previousContainer.data[event.previousIndex];

      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      // Update the status of the dropped item
      this.itemService.updateStatus(item.id, item.version, newStatus)
        .pipe(finalize(() => {this.stopActionInProgress(); }))
        .subscribe();
    }
  }

  startActionInProgress() {
    this.actionInProgress = true;
  }

  stopActionInProgress() {
    this.actionInProgress = false;
    this.changeDetector.detectChanges();
  }

  startDragAction() {
    this.dragAndDropInProgress = true;
  }

  stopDragAction() {
    this.dragAndDropInProgress = false;
  }

  private addItem(item: Item) {
    this.statusItemsMap.get(item.status).push(item);
  }

  private removeItem(itemId: string) {
    // Remove the item
    for (const items of this.statusItemsMap.values()) {
      const index = items.map(i => i.id).indexOf(itemId);
      if (index >= 0) {
        items.splice(index, 1);
      }
    }
  }

  private startEventListener() {
    this.eventSource = this.itemService.listenToEvents((e) => this.onSaved(e),
      (e) => this.onDeleted(e));
  }

  private onDeleted(e) {
    this.removeItem(e.itemId)
  }

  private onSaved(e) {
    this.removeItem(e.item.id);
    this.addItem(e.item);
  }

  private stopEventListener() {
    this.eventSource.close();
  }

}
