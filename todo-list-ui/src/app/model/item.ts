import {ItemStatus} from './item-status.enum';
import {Moment} from 'moment';
import {Person} from "./person";
import {Tag} from "./tag";

export interface Item {
  id: number;
  version: number;
  description: string;
  status: ItemStatus;
  assignee?: Person;
  tags?: Tag[];

  createdDate: Moment;
  lastModifiedDate: Moment;
}
