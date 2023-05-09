import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarTablaListadoProductosFinancierosComponent } from '../searchbar-tabla-listado-productos-financieros/searchbar-tabla-listado-productos-financieros.component';
import { BotonGenericoComponent } from '../../../shared/components/boton-generico/boton-generico.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-listado-productos-financieros',
  standalone: true,
  templateUrl: './header-listado-productos-financieros.component.html',
  styleUrls: ['./header-listado-productos-financieros.component.scss'],
  imports: [
    BotonGenericoComponent,
    CommonModule,
    RouterLink,
    SearchbarTablaListadoProductosFinancierosComponent,
  ],
})
export class HeaderListadoProductosFinancierosComponent {}
