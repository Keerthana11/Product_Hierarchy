import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SmodelService {
  constructor(private http: HttpClient) {}

  getSpectreModel() {
    return this.http
      .get('./assets/products/S1.json')
      .pipe(catchError(this.handleError));
  }

  // Error Handling code
  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error() || 'Server error');
  }
}
