import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Item} from '../model/item';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-save-dialog.component.html',
  styleUrls: ['./item-save-dialog.component.scss']
})
export class ItemSaveDialogComponent {

  description: string;

  constructor(private readonly dialogRef: MatDialogRef<ItemSaveDialogComponent>,
              @Inject(MAT_DIALOG_DATA) readonly item: Item) {
    this.description = item ? item.description : undefined;
  }

  onCancel() {
    this.dialogRef.close();
  }

  onOk() {
    this.dialogRef.close(this.description);
  }

}
