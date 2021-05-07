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

    this.itemToBeSaved = item ? {
      id: item.id,
      description: item.description,
      assignee: item.assignee,
      tags: item.tags
    } : {};
  }

  ngOnInit(): void {

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

}
