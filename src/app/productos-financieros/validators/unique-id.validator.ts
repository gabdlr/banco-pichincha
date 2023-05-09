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
      .get<boolean>(
        'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/verification',
        { params: { id: control.value } }
      )
      .pipe(
        map((existeId) => (existeId ? { existeId: true } : null)),
        catchError(() => of(null))
      );
  }
}
