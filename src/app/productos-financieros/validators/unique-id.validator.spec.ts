import { TestBed } from '@angular/core/testing';

import { UniqueIdValidator } from './unique-id.validator';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { FormControl } from '@angular/forms';

describe('ProductoFinancieroService', () => {
  let service: UniqueIdValidator;
  let client: HttpClient;
  let controller: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(UniqueIdValidator);
    client = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should append id as params and return object on true response', () => {
    service = new UniqueIdValidator(client);
    const testValue = 'trj-test-id';
    service
      .validate(new FormControl(testValue))
      .subscribe((value) => expect(value).toBeTruthy());
    const req = controller.expectOne(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/verification?id=' +
        testValue
    );
    req.flush(true);
  });

  it('should return null on false response', () => {
    service = new UniqueIdValidator(client);
    const testValue = 'trj-test-id';
    service
      .validate(new FormControl(testValue))
      .subscribe((value) => expect(value).toBeNull());
    const req = controller.expectOne(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/verification?id=' +
        testValue
    );
    req.flush(false);
  });

  it('should return null on error response', () => {
    service = new UniqueIdValidator(client);
    const testValue = 'trj-test-id';
    service
      .validate(new FormControl(testValue))
      .subscribe((value) => expect(value).toBeNull());
    const req = controller.expectOne(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/verification?id=' +
        testValue
    );
    req.flush('Error', {
      status: 500,
      statusText: 'Internal Server Error',
    });
  });

  afterEach(() => {
    controller.verify();
  });
});
