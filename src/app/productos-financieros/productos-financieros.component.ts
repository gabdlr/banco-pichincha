import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-productos-financieros',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './productos-financieros.component.html',
  styleUrls: ['./productos-financieros.component.scss'],
})
export class ProductosFinancierosComponent {}
