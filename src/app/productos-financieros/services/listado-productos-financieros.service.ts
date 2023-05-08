import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Subject,
  catchError,
  map,
  of,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { ProductoFinancieroDto } from '../models/DTO/ProductoFinancieroDTO';
import { ProductoFinanciero } from '../models/ProductoFinanciero';

@Injectable({
  providedIn: 'root',
})
export class ListadoProductosFinancierosService {
  currentResultLength$;
  listadoProductosFiancieros$;
  searchString$;
  private currentResultsLength;
  private getListadoProductosFinancieros$;
  private listadoProductosFiancieros;
  private searchString;
  constructor(private httpClient: HttpClient) {
    this.listadoProductosFiancieros = new Subject<ProductoFinanciero[]>();
    this.currentResultsLength = new Subject<number>();
    this.getListadoProductosFinancieros$ = this.httpClient.get<
      ProductoFinancieroDto[]
    >(
      'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/'
    );
    this.currentResultLength$ = this.currentResultsLength.pipe(startWith(0));
    this.listadoProductosFiancieros$ = this.listadoProductosFiancieros.pipe(
      startWith(true),
      switchMap(() => this.getListadoProductosFinancieros$),
      tap((listadoProductosFiancierosDTO) =>
        this.currentResultsLength.next(listadoProductosFiancierosDTO.length)
      ),
      map((listadoProductosFinancierosDTO) => {
        return listadoProductosFinancierosDTO.map<ProductoFinanciero>(
          (productoFinancieroDTO) => {
            const producto = new ProductoFinanciero();
            producto.fromDTO(productoFinancieroDTO);
            return producto;
          }
        );
      }),
      shareReplay(),
      catchError(() => of([]))
    );
    this.searchString = new Subject<string>();
    this.searchString$ = this.searchString.pipe(startWith(''));
  }

  updateSearchString(searchString: string) {
    this.searchString.next(searchString);
  }

  setCurrentResultLength(length: number) {
    this.currentResultsLength.next(length);
  }
}
