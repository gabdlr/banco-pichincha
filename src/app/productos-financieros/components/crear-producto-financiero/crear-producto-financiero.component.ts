import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioProductoFinancieroComponent } from '../formulario-producto-financiero/formulario-producto-financiero.component';
import { ProductoFinancieroService } from '../../services/producto-financiero.service';
import { ProductoFinancieroDto } from '../../models/DTO/ProductoFinancieroDTO';

@Component({
  selector: 'app-crear-producto-financiero',
  standalone: true,
  imports: [CommonModule, FormularioProductoFinancieroComponent],
  templateUrl: './crear-producto-financiero.component.html',
  styleUrls: ['./crear-producto-financiero.component.scss'],
})
export class CrearProductoFinancieroComponent {
  constructor(private productoFinancieroService: ProductoFinancieroService) {}

  addNewProduct(productoFinanciero: ProductoFinancieroDto) {
    this.productoFinancieroService.createProductoFinanciero(productoFinanciero);
  }
}
