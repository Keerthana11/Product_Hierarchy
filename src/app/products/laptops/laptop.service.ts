import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { LaptopsComponent } from '../laptops/laptops.component';

@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  constructor(private http: HttpClient) {}

  getLaptops() {
    return this.http
      .get('./assets/products/L.json')
      .pipe(catchError(this.handleError));
  }

  // Error Handling code
  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error() || 'Server error');
  }
}
