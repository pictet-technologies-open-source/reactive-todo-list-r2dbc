import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../model/item';
import {ItemService} from '../service/item.service';
import {finalize, take} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {ItemSaveDialogComponent} from '../item-save-dialog/item-save-dialog.component';
import {DateUtils} from '../utils/date-utils';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: Item;
  @Input() readonly = false;
  @Output() itemDeleted = new EventEmitter();
  @Output() itemUpdated = new EventEmitter();
  displayMenu = false;

  actionInProgress = false;

  constructor(private readonly itemService: ItemService,
              private readonly dialog: MatDialog) {

  }

  delete() {
    this.actionInProgress = true;

    this.itemService.delete(this.item.id, this.item.version)
      .pipe(finalize(() => this.actionInProgress = false)).subscribe(() => {
      this.itemDeleted.emit();
    });
  }

  edit() {
    this.actionInProgress = true;

    const dialogRef = this.dialog.open(ItemSaveDialogComponent, {
      width: '650px',
      disableClose: true,
      data: this.item
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe((response) => {
      if (response) {
        this.itemService.updateDescription(this.item.id, this.item.version, response)
          .pipe(finalize(() => this.actionInProgress = false))
          .subscribe(() => {
            this.itemUpdated.emit();
          });
      } else {
        this.actionInProgress = false;
      }
    });
  }

  hasBeenUpdateRecently(): boolean {
    return DateUtils.toDuration(this.item.lastModifiedDate).asSeconds() < 5;
  }

  displayActionButtons(): boolean {
    return !this.readonly && this.displayMenu;
  }

  getAssigneeName(): string {
    return this.item.assignee ? `${this.item.assignee.firstName} ${this.item.assignee.lastName}` : 'Unassigned';
  }
}
