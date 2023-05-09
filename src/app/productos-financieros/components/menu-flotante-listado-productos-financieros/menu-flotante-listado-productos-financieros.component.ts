import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoFinanciero } from '../../models/ProductoFinanciero';
import { RouterLink } from '@angular/router';
import { ProductoFinancieroService } from '../../services/producto-financiero.service';

@Component({
  selector: 'app-menu-flotante-listado-productos-financieros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-flotante-listado-productos-financieros.component.html',
  styleUrls: ['./menu-flotante-listado-productos-financieros.component.scss'],
})
export class MenuFlotanteListadoProductosFinancierosComponent {
  data?: ProductoFinanciero;
  constructor(private productoFinancieroService: ProductoFinancieroService) {}
  deleteProducto() {
    this.productoFinancieroService.deleteProductoFinanciero(this.data!.id);
  }
}
