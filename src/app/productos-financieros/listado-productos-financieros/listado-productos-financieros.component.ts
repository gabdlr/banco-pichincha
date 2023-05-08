import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderListadoProductosFinancierosComponent } from '../components/header-listado-productos-financieros/header-listado-productos-financieros.component';
import { TablaListadoProductosFinancierosComponent } from '../components/tabla-listado-productos-financieros/tabla-listado-productos-financieros.component';
import { ListadoProductosFinancierosService } from '../services/listado-productos-financieros.service';
import { FooterListadoProductosFinancierosComponent } from '../components/footer-listado-productos-financieros/footer-listado-productos-financieros.component';

@Component({
  selector: 'app-listado-productos-financieros',
  standalone: true,
  templateUrl: './listado-productos-financieros.component.html',
  styleUrls: ['./listado-productos-financieros.component.scss'],
  imports: [
    CommonModule,
    HeaderListadoProductosFinancierosComponent,
    TablaListadoProductosFinancierosComponent,
    FooterListadoProductosFinancierosComponent,
  ],
})
export class ListadoProductosFinancierosComponent {
  currentResultLength$;
  listadoProductosFinancieros$;
  searchString$;
  constructor(
    private listadoProductosFinancierosService: ListadoProductosFinancierosService
  ) {
    this.listadoProductosFinancieros$ =
      this.listadoProductosFinancierosService.listadoProductosFiancieros$;
    this.searchString$ = this.listadoProductosFinancierosService.searchString$;
    this.currentResultLength$ =
      this.listadoProductosFinancierosService.currentResultLength$;
  }
}
