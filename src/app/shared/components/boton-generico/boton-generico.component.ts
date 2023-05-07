import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton-generico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-generico.component.html',
  styleUrls: ['./boton-generico.component.scss'],
})
export class BotonGenericoComponent {
  @Input() buttonBgColor: ButtonBgColor = 'yellow';
  @Input() buttonText = '';
  @Input() disabled = false;
  @Input() buttonType: ButtonType = 'button';
}

type ButtonBgColor = 'yellow' | 'gray';
type ButtonType = 'submit' | 'button' | 'reset';
