import {ItemStatus} from './item-status.enum';
import {Moment} from 'moment';

export interface SaveItem {
  id?: number;
  version?: number;
  description?: string;
  status?: ItemStatus;
  assigneeId?: number;
  tagIds?: number[];

  createdDate?: Moment;
  lastModifiedDate?: Moment;
}
