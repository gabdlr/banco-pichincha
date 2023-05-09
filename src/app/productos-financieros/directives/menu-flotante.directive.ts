import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { MenuFlotanteListadoProductosFinancierosComponent } from '../components/menu-flotante-listado-productos-financieros/menu-flotante-listado-productos-financieros.component';
import { ProductoFinanciero } from '../models/ProductoFinanciero';
@Directive({
  selector: '[appMenuFlotante]',
  standalone: true,
})
export class MenuFlotanteDirective {
  @HostListener('click', ['$event.target']) load(event: PointerEvent) {
    if (!this.elementRef) {
      this.loadComponent();
    } else if (
      this.elementRef &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.elementRef = undefined;
      this.unloadComponent();
    }
  }
  @HostListener('document:click', ['$event.target']) destroy(
    event: EventTarget
  ) {
    if ((event as HTMLElement).innerText !== 'more_vert' && this.elementRef) {
      this.elementRef = undefined;
      this.unloadComponent();
    }
  }

  @Input() data: ProductoFinanciero | undefined;
  elementRef: ElementRef<any> | undefined;
  constructor(public viewContainerRef: ViewContainerRef) {}

  loadComponent() {
    const componentInstance = this.viewContainerRef.createComponent(
      MenuFlotanteListadoProductosFinancierosComponent
    );
    componentInstance.instance.data = this.data;
    this.elementRef = this.viewContainerRef.element;
  }

  unloadComponent() {
    this.viewContainerRef.clear();
  }
}
