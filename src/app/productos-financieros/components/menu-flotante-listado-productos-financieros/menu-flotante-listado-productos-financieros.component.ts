import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-flotante-listado-productos-financieros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-flotante-listado-productos-financieros.component.html',
  styleUrls: ['./menu-flotante-listado-productos-financieros.component.scss'],
})
export class MenuFlotanteListadoProductosFinancierosComponent {
  data?: { id: string };
}
