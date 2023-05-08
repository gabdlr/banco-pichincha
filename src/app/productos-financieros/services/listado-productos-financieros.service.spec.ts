import { TestBed, waitForAsync } from '@angular/core/testing';
import { ListadoProductosFinancierosService } from './listado-productos-financieros.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ProductoFinancieroDto } from '../models/DTO/ProductoFinancieroDTO';
import { ProductoFinanciero } from '../models/ProductoFinanciero';

describe('ListadoProductosFinancierosService', () => {
  let service: ListadoProductosFinancierosService;
  let client: HttpClient;
  let controller: HttpTestingController;
  let responsePlaceholder: ProductoFinancieroDto[] = [
    {
      id: 'test-id-1',
      name: 'test-name-1',
      description: 'test-description-1',
      logo: 'test-logo-1',
      date_release: '2023-02-01T00:00:00.000+00:00',
      date_revision: '2024-02-01T00:00:00.000+00:00',
    },
    {
      id: 'test-id-2',
      name: 'test-name-2',
      description: 'test-description-2',
      logo: 'test-logo-2',
      date_release: '2023-02-01T00:00:00.000+00:00',
      date_revision: '2024-02-01T00:00:00.000+00:00',
    },
  ];
  const listadoProductosFinancierosServiceSpy = jasmine.createSpyObj(
    'ListadoProductosFinancierosService',
    ['updateSearchString', 'setCurrentResultLength']
  );

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ListadoProductosFinancierosService,
          useValue: listadoProductosFinancierosServiceSpy,
        },
      ],
    });
    service = TestBed.inject(ListadoProductosFinancierosService);
    client = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call updateSearchString', () => {
    service.updateSearchString('value');
    expect(service.updateSearchString).toHaveBeenCalled();
  });

  it('should call setCurrentResultLength', () => {
    service.setCurrentResultLength(1);
    expect(service.setCurrentResultLength).toHaveBeenCalled();
  });

  it('should start searchString observable as empty string', (done: DoneFn) => {
    service = new ListadoProductosFinancierosService(client);
    service.searchString$.subscribe((value) => {
      expect(value).toEqual('');
      done();
    });
  });

  it('should push new searchString value', (done: DoneFn) => {
    service = new ListadoProductosFinancierosService(client);
    service['searchString'].subscribe((value) => {
      expect(value).toEqual('test');
      done();
    });
    service.updateSearchString('test');
  });

  it('should start currentResultsLength observable as 0', (done: DoneFn) => {
    service = new ListadoProductosFinancierosService(client);
    service.currentResultLength$.subscribe((value) => {
      expect(value).toBe(0);
      done();
    });
  });

  it('should properly map DTO response', () => {
    service = new ListadoProductosFinancierosService(client);
    service.listadoProductosFiancieros$.subscribe((value) => {
      expect(value).toBeInstanceOf(Array<ProductoFinanciero>);
    });
    const req = controller.expectOne(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/'
    );
    req.flush(responsePlaceholder);
  });

  it('should return an empty arrray if request fails', () => {
    service = new ListadoProductosFinancierosService(client);
    service.listadoProductosFiancieros$.subscribe((value) => {
      expect(value).toHaveSize(0);
    });
    const req = controller.expectOne(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/'
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
