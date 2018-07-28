import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class RestService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }

  create(resouce) {
    return this.http.post(this.url, resouce).pipe(
      catchError(this.handleError)
    );
  }

  delete(_id) {
    return this.http.delete(this.url + '/' + _id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
