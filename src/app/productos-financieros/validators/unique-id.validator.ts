import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueIdValidator implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.httpClient
      .get<{ data: boolean }>(
        'https://banco-pichincha-be-production.up.railway.app/bp/products/verification',
        {
          params: { id: control.value },
        }
      )
      .pipe(
        map((existeId) => (existeId.data ? { existeId: true } : null)),
        catchError(() => of(null))
      );
  }
}
