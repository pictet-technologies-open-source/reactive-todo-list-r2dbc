import {NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class AbstractReactiveService<T> {

  constructor(protected readonly baseUri,
              protected readonly http: HttpClient,
              protected readonly ngZone: NgZone) {

  }

  findAll(): Observable<T> {
    return new Observable<T>((subscriber) => {

      const eventSource = new EventSource(this.baseUri);

      // Process incoming messages
      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);

        this.ngZone.run(() => subscriber.next(data));
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

}
