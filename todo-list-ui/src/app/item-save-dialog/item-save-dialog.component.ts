import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Item} from '../model/item';
import {PersonService} from '../service/person.service';
import {TagService} from '../service/tag.service';
import {Person} from '../model/person';
import {Tag} from '../model/tag';
import {SaveItem} from "../model/save-item";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-save-dialog.component.html',
  styleUrls: ['./item-save-dialog.component.scss']
})
export class ItemSaveDialogComponent implements OnInit {

  people: Person[] = [];
  tags: Tag[] = [];

  itemToBeSaved: SaveItem;

  constructor(private readonly dialogRef: MatDialogRef<ItemSaveDialogComponent>,
              @Inject(MAT_DIALOG_DATA) readonly item: Item,
              private readonly personService: PersonService,
              private readonly tagService: TagService) {
  }

  ngOnInit(): void {

    if(this.item) {
      this.itemToBeSaved = {
        id: this.item.id,
        description: this.item.description,
        assigneeId: this.item.assignee ? this.item.assignee.id : null,
        tagIds: this.item.tags ? this.item.tags.map(t => t.id) : []
      }
    } else {
      this.itemToBeSaved = {tagIds: []};
    }

    this.personService.findAll().subscribe(person => {
      this.people.push(person);
    });

    this.tagService.findAll().subscribe(tag => {
      this.tags.push(tag);
    });

  }

  onCancel() {
    this.dialogRef.close();
  }

  onOk() {
    this.dialogRef.close(this.itemToBeSaved);
  }

  toggleTagSelected(tag: Tag) {
    const index = this.getTagIndex(tag);
    if (index >= 0) {
      this.itemToBeSaved.tagIds.splice(index, 1);
    } else {
      this.itemToBeSaved.tagIds.push(tag.id);
    }
  }

  isTagSelected(tag: Tag): boolean {
    return this.getTagIndex(tag) >= 0;
  }

  private getTagIndex(tag: Tag): number {
    return (this.itemToBeSaved && this.itemToBeSaved.tagIds)
     ? this.itemToBeSaved.tagIds.indexOf(tag.id) : -1;
  }

}
