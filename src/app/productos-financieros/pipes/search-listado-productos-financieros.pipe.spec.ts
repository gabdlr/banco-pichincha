import { TestBed, waitForAsync } from '@angular/core/testing';
import { ListadoProductosFinancierosService } from '../services/listado-productos-financieros.service';
import { SearchListadoProductosFinancierosPipe } from './search-listado-productos-financieros.pipe';
import { ProductoFinanciero } from '../models/ProductoFinanciero';

describe('SearchListadoProductosFinancierosPipe', () => {
  let listadoProductosFinancierosService: ListadoProductosFinancierosService;
  beforeEach(waitForAsync(() => {
    const listadoProductosFinancierosServiceSpy = jasmine.createSpyObj(
      'ListadoProductosFinancierosService',
      ['setCurrentResultLength']
    );
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ListadoProductosFinancierosService,
          useValue: listadoProductosFinancierosServiceSpy,
        },
      ],
    });
    listadoProductosFinancierosService = TestBed.inject(
      ListadoProductosFinancierosService
    );
  }));

  it('create an instance', () => {
    const pipe = new SearchListadoProductosFinancierosPipe(
      listadoProductosFinancierosService
    );
    expect(pipe).toBeTruthy();
  });

  it('should return a single value that matches search criteria', () => {
    const pipe = new SearchListadoProductosFinancierosPipe(
      listadoProductosFinancierosService
    );
    const productoId = 'some-random-id';
    let mockData: ProductoFinanciero[] = [
      new ProductoFinanciero(undefined, undefined, undefined, productoId),
    ];
    const searchResult = pipe.transform(mockData, productoId);
    expect(searchResult).toHaveSize(1);
  });

  it('should return an empty array for no matching criteria', () => {
    const pipe = new SearchListadoProductosFinancierosPipe(
      listadoProductosFinancierosService
    );
    const productoId = 'some-random-id';
    const unmatch = 'no-match-id';
    let mockData: ProductoFinanciero[] = [
      new ProductoFinanciero(undefined, undefined, undefined, productoId),
    ];
    const searchResult = pipe.transform(mockData, unmatch);
    expect(searchResult).toHaveSize(0);
  });

  it('should return an empty array if null is given as value', () => {
    const pipe = new SearchListadoProductosFinancierosPipe(
      listadoProductosFinancierosService
    );
    const searchResult = pipe.transform(null, 'no-value');
    expect(searchResult).toBeInstanceOf(Array);
  });

  it('should set results length after filtering', () => {
    const pipe = new SearchListadoProductosFinancierosPipe(
      listadoProductosFinancierosService
    );
    const productoId = 'some-random-id';
    let mockData: ProductoFinanciero[] = [
      new ProductoFinanciero(undefined, undefined, undefined, productoId),
    ];
    pipe.transform(mockData, productoId);
    expect(
      listadoProductosFinancierosService.setCurrentResultLength
    ).toHaveBeenCalled();
  });

  it('should set results length when search argument is null', () => {
    const pipe = new SearchListadoProductosFinancierosPipe(
      listadoProductosFinancierosService
    );
    let mockData: ProductoFinanciero[] = [
      new ProductoFinanciero(undefined, undefined, undefined, 'some-random-id'),
    ];
    pipe.transform(mockData, null);
    expect(
      listadoProductosFinancierosService.setCurrentResultLength
    ).toHaveBeenCalled();
  });
});
