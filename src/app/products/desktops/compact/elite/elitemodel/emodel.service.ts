import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmodelService {
  constructor(private http: HttpClient) {}
  getEliteModel() {
    return this.http
      .get('./assets/products/E1.json')
      .pipe(catchError(this.handleError));
  }

  // Error Handling code
  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error() || 'Server error');
  }
}
