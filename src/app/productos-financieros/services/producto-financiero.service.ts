import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoFinancieroDto } from '../models/DTO/ProductoFinancieroDTO';
import { ListadoProductosFinancierosService } from './listado-productos-financieros.service';
import { EMPTY, catchError, finalize, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductoFinancieroService {
  constructor(
    private httpClient: HttpClient,
    private listadoProductosFinancierosService: ListadoProductosFinancierosService,
    private router: Router
  ) {}

  createProductoFinanciero(productoFinancieroDTO: ProductoFinancieroDto) {
    this.httpClient
      .post<ProductoFinancieroDto>(
        'https://banco-pichincha-be-production.up.railway.app/bp/products/',
        productoFinancieroDTO
      )
      .pipe(
        finalize(() => {
          this.listadoProductosFinancierosService.refetchListado();
          this.router.navigate(['']);
        }),
        catchError(() => of(EMPTY))
      )
      .subscribe();
  }

  updateProductoFinanciero(productoFinancieroDTO: ProductoFinancieroDto) {
    this.httpClient
      .put<ProductoFinancieroDto>(
        'https://banco-pichincha-be-production.up.railway.app/bp/products/',
        productoFinancieroDTO
      )
      .pipe(
        finalize(() => {
          this.listadoProductosFinancierosService.refetchListado();
          this.router.navigate(['']);
        }),
        catchError(() => of(EMPTY))
      )
      .subscribe();
  }

  deleteProductoFinanciero(id: string) {
    this.httpClient
      .delete(
        'https://banco-pichincha-be-production.up.railway.app/bp/products/',
        { params: { id } }
      )
      .pipe(
        finalize(() =>
          this.listadoProductosFinancierosService.refetchListado()
        ),
        catchError(() => of(EMPTY))
      )
      .subscribe();
  }
}
