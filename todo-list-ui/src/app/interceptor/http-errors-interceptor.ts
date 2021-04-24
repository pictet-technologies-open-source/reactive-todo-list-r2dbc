import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorsInterceptor implements HttpInterceptor {

  private readonly errors: HttpStatusCodeMessage[] = [];
  private readonly optimisticLockingDefaultMessage = 'You are trying to modify an outdated version of this resource. Please, refresh the data.';
  private readonly serverErrorDefaultMessage = 'Server error. If the error persists, please, contact the support.';

  constructor(private readonly matSnackBar: MatSnackBar) {
    this.loadCodes();
  }

  private loadCodes(): void {
    this.errors[400] = {
      http: 'Bad Request',
      message: 'This request is not correctly formed.'
    };
    this.errors[401] = {
      http: 'Unauthorized',
      message: 'Your authentication is not valid to access this resource.'
    };
    this.errors[403] = {
      http: 'Forbidden',
      message: 'You don\'t have the permission to access this resource.'
    };
    this.errors[404] = {
      http: 'Not Found',
      message: 'The resource is not existing.'
    };
    this.errors[405] = {
      http: 'Method Not Allowed',
      message: 'The application is trying to access this resource with the wrong HTTP method.'
    };
    this.errors[406] = {
      http: 'Not Acceptable',
      message: 'The application is trying to access this resource with the wrong content type.'
    };
    this.errors[408] = {
      http: 'Request Timeout',
      message: 'The application tried to call the server but the request timed out.'
    };
    this.errors[409] = {
      http: 'Conflict',
      message: this.optimisticLockingDefaultMessage,
    };
    this.errors[412] = {
      http: 'Precondition failed',
      message: this.optimisticLockingDefaultMessage,
    };
    this.errors[422] = {
      http: 'Unprocessable Entity',
      message: 'The server consider that the resource validation is not fulfilled.'
    };
    this.errors[500] = {
      http: 'Internal Server Error',
      message: 'Sorry, the server can\'t process this request.'
    };
    this.errors[502] = {
      http: 'Bad Gateway',
      message: this.serverErrorDefaultMessage,
    };
    this.errors[503] = {
      http: 'Service Unavailable',
      message: this.serverErrorDefaultMessage,
    };
    this.errors[504] = {
      http: 'Gateway Timeout',
      message: this.serverErrorDefaultMessage,
    };

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(catchError((error: HttpErrorResponse) => {
          let errorMessage = this.serverErrorDefaultMessage;
          let actionType = 'Error';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = error.error.message;
          } else {
            // server-side error
            if (this.errors[error.status]) {
              errorMessage = this.errors[error.status].message;
              if (error.message) {
                console.error(error.message);
              }
              actionType = this.errors[error.status].http;
            }
          }
          this.matSnackBar.open(errorMessage, actionType, {
              duration: 8000,
              panelClass: ['error-message']
          });

          return throwError(error);
        })
      );
  }
}

interface HttpStatusCodeMessage {
  http?: string;
  message: string;
}
