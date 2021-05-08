import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Item} from '../model/item';
import {PersonService} from "../service/person.service";
import {TagService} from "../service/tag.service";
import {Person} from "../model/person";
import {Tag} from "../model/tag";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-save-dialog.component.html',
  styleUrls: ['./item-save-dialog.component.scss']
})
export class ItemSaveDialogComponent implements OnInit {

  people: Person[] = [];
  tags: Tag[] = [];

  itemToBeSaved: Item;

  constructor(private readonly dialogRef: MatDialogRef<ItemSaveDialogComponent>,
              @Inject(MAT_DIALOG_DATA) readonly item: Item,
              private readonly personService: PersonService,
              private readonly tagService: TagService) {


  }

  ngOnInit(): void {

    this.itemToBeSaved = this.item ? {
      id: this.item.id,
      description: this.item.description,
      assignee: this.item.assignee,
      tags: this.item.tags ? this.item.tags : []
    } : { tags: []};

    if(!this.itemToBeSaved.tags) {
      this.itemToBeSaved.tags = [];
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
    this.dialogRef.close(this.item);
  }

  toggleTagSelected(tag: Tag) {
    const index = this.getTagIndex(tag);
    if (index >= 0) {
      this.itemToBeSaved.tags.splice(index, 1);
    } else {
      this.itemToBeSaved.tags.push(tag);
    }
  }


  isTagSelected(tag: Tag): boolean {
    return this.getTagIndex(tag) >= 0;
  }

  private getTagIndex(tag: Tag): number {
    return (this.itemToBeSaved && this.itemToBeSaved.tags)
     ? this.itemToBeSaved.tags.map(t => t.id).indexOf(tag.id) : -1;
  }

}
