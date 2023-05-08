import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SearchListadoProductosFinancierosPipe } from '../../pipes/search-listado-productos-financieros.pipe';
import { ProductoFinanciero } from '../../models/ProductoFinanciero';
import { ProductoFinancieroImagenListadoComponent } from '../producto-financiero-imagen-listado/producto-financiero-imagen-listado.component';
import { FooterListadoProductosFinancierosComponent } from '../footer-listado-productos-financieros/footer-listado-productos-financieros.component';

@Component({
  selector: 'app-tabla-listado-productos-financieros',
  standalone: true,
  templateUrl: './tabla-listado-productos-financieros.component.html',
  styleUrls: ['./tabla-listado-productos-financieros.component.scss'],
  imports: [
    CommonModule,
    SearchListadoProductosFinancierosPipe,
    ProductoFinancieroImagenListadoComponent,
    FooterListadoProductosFinancierosComponent,
  ],
})
export class TablaListadoProductosFinancierosComponent {
  @Input() listadoProductosFinancieros$: Observable<ProductoFinanciero[]> = of(
    []
  );
  @Input() searchString$: Observable<string> = of('');
}
