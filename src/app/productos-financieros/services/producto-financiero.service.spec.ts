import { TestBed } from '@angular/core/testing';

import { ProductoFinancieroService } from './producto-financiero.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ListadoProductosFinancierosService } from './listado-productos-financieros.service';
import { Router } from '@angular/router';

describe('ProductoFinancieroService', () => {
  let controller: HttpTestingController;
  let listadoProductosFinancierosServiceSpy: ListadoProductosFinancierosService;
  let routerSpy: Router;
  let productoFinancieroService: ProductoFinancieroService;

  const productoFinancieroMock = {
    id: 'trj-crd2',
    name: 'Tarjetas de credito',
    description: 'Tarjeta de consume bajo la modalidad de credito',
    logo: 'https://icons-for-free.com/iconfiles/png/512/Mastercard-1320568127572298248.png',
    date_release: '2023-05-08T19:36:55.124Z',
    date_revision: '2024-05-08T19:36:55.124Z',
  };

  beforeEach(() => {
    const listadoProductosFinancierosServiceSpyObj = jasmine.createSpyObj(
      'ListadoProductosFinancierosService',
      ['refetchListado']
    );
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ListadoProductosFinancierosService,
          useValue: listadoProductosFinancierosServiceSpyObj,
        },
        {
          provide: Router,
          useValue: routerSpyObj,
        },
      ],
    });

    productoFinancieroService = TestBed.inject(ProductoFinancieroService);
    controller = TestBed.inject(HttpTestingController);
    listadoProductosFinancierosServiceSpy = TestBed.inject(
      ListadoProductosFinancierosService
    );
    routerSpy = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(productoFinancieroService).toBeTruthy();
  });

  it('should create a new product successfully', () => {
    productoFinancieroService.createProductoFinanciero(productoFinancieroMock);

    const req = controller.expectOne(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products'
    );
    expect(req.request.method).toEqual('POST');
    req.flush(productoFinancieroMock);
    expect(
      listadoProductosFinancierosServiceSpy.refetchListado
    ).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
  });

  it('should handle service error when creating a new product', () => {
    productoFinancieroService.createProductoFinanciero(productoFinancieroMock);
    const req = controller.expectOne(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products'
    );
    req.flush('Error', {
      status: 500,
      statusText: 'Internal Server Error',
    });
    expect(
      listadoProductosFinancierosServiceSpy.refetchListado
    ).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalled();
  });

  it('should update product successfully', () => {
    productoFinancieroService.updateProductoFinanciero(productoFinancieroMock);

    const req = controller.expectOne(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products'
    );
    expect(req.request.method).toEqual('PUT');
    req.flush(productoFinancieroMock);
    expect(
      listadoProductosFinancierosServiceSpy.refetchListado
    ).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
  });

  it('should handle service error when updating a product', () => {
    productoFinancieroService.updateProductoFinanciero(productoFinancieroMock);
    const req = controller.expectOne(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products'
    );
    req.flush('Error', {
      status: 500,
      statusText: 'Internal Server Error',
    });
    expect(
      listadoProductosFinancierosServiceSpy.refetchListado
    ).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalled();
  });

  it('should delete product successfully', () => {
    const idPlaceholder = 'test-id';
    productoFinancieroService.deleteProductoFinanciero(idPlaceholder);

    const req = controller.expectOne(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products?id=' +
        idPlaceholder
    );
    expect(req.request.method).toEqual('DELETE');
    req.flush(productoFinancieroMock);
    expect(
      listadoProductosFinancierosServiceSpy.refetchListado
    ).toHaveBeenCalled();
  });

  it('should handle service error when deleting a product', () => {
    const idPlaceholder = 'test-id';
    productoFinancieroService.deleteProductoFinanciero(idPlaceholder);

    const req = controller.expectOne(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products?id=' +
        idPlaceholder
    );
    req.flush('Error', {
      status: 500,
      statusText: 'Internal Server Error',
    });
    expect(
      listadoProductosFinancierosServiceSpy.refetchListado
    ).toHaveBeenCalled();
  });

  afterEach(() => {
    controller.verify();
  });
});
