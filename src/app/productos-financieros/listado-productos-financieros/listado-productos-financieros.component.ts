import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderListadoProductosFinancierosComponent } from '../components/header-listado-productos-financieros/header-listado-productos-financieros.component';
import { TablaListadoProductosFinancierosComponent } from '../components/tabla-listado-productos-financieros/tabla-listado-productos-financieros.component';

@Component({
  selector: 'app-listado-productos-financieros',
  standalone: true,
  templateUrl: './listado-productos-financieros.component.html',
  styleUrls: ['./listado-productos-financieros.component.scss'],
  imports: [
    CommonModule,
    HeaderListadoProductosFinancierosComponent,
    TablaListadoProductosFinancierosComponent,
  ],
})
export class ListadoProductosFinancierosComponent {}
