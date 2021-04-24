import {ItemStatus} from './item-status.enum';
import {Moment} from 'moment';

export interface Item {
  id: string;
  version: number;
  description: string;
  status: ItemStatus;
  createdDate: Moment;
  lastModifiedDate: Moment;
}
