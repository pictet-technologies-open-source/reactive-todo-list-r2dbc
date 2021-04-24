import * as moment from 'moment';
import {Duration, Moment} from 'moment';

export class DateUtils {

  private constructor() {
  }

  static toDuration(value: Moment): Duration {
    return value ? moment.duration(moment().utc().diff(value)) : null;
  }

}
