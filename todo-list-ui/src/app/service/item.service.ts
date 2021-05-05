import {Injectable, NgZone} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from '../model/item';
import {Observable} from 'rxjs';
import {ItemStatus} from '../model/item-status.enum';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  readonly baseUrl;

  constructor(private readonly http: HttpClient, private readonly ngZone: NgZone) {
    this.baseUrl = `${environment.apiUrl}/items`;
  }

  private static buildOptions(version: number) {
    return {
      headers: new HttpHeaders({
        'if-match': String(version)
      })
    };
  }

  findAll(): Observable<Item> {
    return new Observable<Item>((subscriber) => {

      const eventSource = new EventSource(this.baseUrl);

      // Process incoming messages
      eventSource.onmessage = (event) => {
        const item = JSON.parse(event.data);

        // item.assignee = { id: 1, firstName: 'John', lastName: 'GuapitoDelLaCruz'};
        // item.tags = [{ id: 1, name: 'Work'},{ id: 1, name: 'Private'}];

        this.ngZone.run(() => subscriber.next(item));
      };

      // Handle error
      eventSource.onerror = (error) => {
        if (eventSource.readyState === 0) {
            // The connection has been closed by the server
            eventSource.close();
            subscriber.complete();
        } else {
          subscriber.error(error);
        }
      };
    });
  }

  addItem(description: string): Observable<any> {
    return this.http.post<Item>(this.baseUrl, {description});
  }

  findById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/${id}`);
  }

  delete(id: number, version: number): Observable<any> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, ItemService.buildOptions(version));
  }

  updateDescription(id: number, version: number, description: string): Observable<any> {
    return this.http.patch<void>(`${this.baseUrl}/${id}`, {description}, ItemService.buildOptions(version));
  }

  updateStatus(id: number, version: number, status: ItemStatus): Observable<any> {
    return this.http.patch<void>(`${this.baseUrl}/${id}`, {status}, ItemService.buildOptions(version));
  }

  listenToEvents(onSaved: (event) => void, onDeleted: (event) => void): EventSource {
    const eventSource = new EventSource(`${this.baseUrl}/events`);

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
