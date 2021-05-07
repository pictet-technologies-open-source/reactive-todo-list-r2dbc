import {Injectable, NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AbstractReactiveService} from "./abstract-reactive.service";
import {Tag} from "../model/tag";

@Injectable({
  providedIn: 'root'
})
export class TagService extends AbstractReactiveService<Tag> {

  constructor(protected readonly http: HttpClient, protected readonly ngZone: NgZone) {
    super(`${environment.apiUrl}/tags`, http, ngZone);
  }

}
