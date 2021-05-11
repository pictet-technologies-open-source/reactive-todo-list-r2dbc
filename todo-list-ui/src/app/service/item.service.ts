import {Injectable, NgZone} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from '../model/item';
import {Observable} from 'rxjs';
import {ItemStatus} from '../model/item-status.enum';
import {environment} from '../../environments/environment';
import {AbstractReactiveService} from './abstract-reactive.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends AbstractReactiveService<Item> {

  constructor(protected readonly http: HttpClient, protected readonly ngZone: NgZone) {
    super(`${environment.apiUrl}/items`, http, ngZone);
  }

  private static buildOptions(version: number) {
    return {
      headers: new HttpHeaders({
        'if-match': String(version)
      })
    };
  }

  addItem(description: string, assigneeId: number, tagIds = [] as number[]): Observable<any> {
    return this.http.post<Item>(this.baseUri, {
      description, assigneeId, tagIds});
  }

  findById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUri}/${id}`);
  }

  delete(id: number, version: number): Observable<any> {
    return this.http.delete<void>(`${this.baseUri}/${id}`, ItemService.buildOptions(version));
  }

  update(id: number, version: number, description: string, assigneeId: number, tagIds: number[]): Observable<any> {
    return this.http.patch<void>(`${this.baseUri}/${id}`,
      {description, assigneeId, tagIds}, ItemService.buildOptions(version));
  }

  updateStatus(id: number, version: number, status: ItemStatus): Observable<any> {
    return this.http.patch<void>(`${this.baseUri}/${id}`, {status}, ItemService.buildOptions(version));
  }

  listenToEvents(onSaved: (event) => void, onDeleted: (event) => void): EventSource {
    const eventSource = new EventSource(`${this.baseUri}/events`);

    // Handle the creation and the update of items
    eventSource.addEventListener('ItemSaved', (event: MessageEvent) => {
      onSaved(JSON.parse(event.data));
    });

    // Handle the deletion of items
    eventSource.addEventListener('ItemDeleted', (event: MessageEvent) => {
      onDeleted(JSON.parse(event.data));
    });

    // Handle errors
    eventSource.onerror = (error) => {
      if (eventSource.readyState === 0) {
        // The connection has been closed
        // We should not close the eventSource in order to allow the automatic reconnection
        console.error('Stream closed');
      } else {
        console.error(error);
      }
    };

    return eventSource;
  }

}
