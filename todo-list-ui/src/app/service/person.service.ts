import {Injectable, NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AbstractReactiveService} from './abstract-reactive.service';
import {Person} from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends AbstractReactiveService<Person> {

  constructor(protected readonly http: HttpClient, protected readonly ngZone: NgZone) {
    super(`${environment.apiUrl}/people`, http, ngZone);
  }

}
