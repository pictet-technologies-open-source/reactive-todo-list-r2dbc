import { Pipe, PipeTransform } from '@angular/core';
import {DateUtils} from '../utils/date-utils';
import {Moment} from 'moment';

@Pipe({
  name: 'momentHumanize',
  pure: false
})
export class MomentHumanizePipe implements PipeTransform {

  transform(value: Moment): string {
    return value ? DateUtils.toDuration(value).humanize() : null;
  }

}
