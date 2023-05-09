import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFlotanteListadoProductosFinancierosComponent } from './menu-flotante-listado-productos-financieros.component';
import { ProductoFinancieroService } from '../../services/producto-financiero.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { ProductoFinanciero } from '../../models/ProductoFinanciero';

describe('MenuFlotanteListadoProductosFinancierosComponent', () => {
  let component: MenuFlotanteListadoProductosFinancierosComponent;
  let fixture: ComponentFixture<MenuFlotanteListadoProductosFinancierosComponent>;
  let productoFinancieroService: ProductoFinancieroService;
  let httpClient: HttpClient;
  beforeEach(async () => {
    let productoFinancieroServiceSpy = jasmine.createSpyObj(
      'ProductoFinancieroService',
      ['deleteProductoFinanciero']
    );
    await TestBed.configureTestingModule({
      imports: [MenuFlotanteListadoProductosFinancierosComponent],
      providers: [
        {
          provide: ProductoFinancieroService,
          useValue: productoFinancieroServiceSpy,
        },
        provideHttpClient(),
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      MenuFlotanteListadoProductosFinancierosComponent
    );
    component = fixture.componentInstance;
    productoFinancieroService = TestBed.inject(ProductoFinancieroService);
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteProductoFinanciero on the service', () => {
    const productoFinancieroMock = new ProductoFinanciero();
    productoFinancieroMock.id = 'test-id';
    component.data = productoFinancieroMock;
    component.deleteProducto();
    expect(
      productoFinancieroService.deleteProductoFinanciero
    ).toHaveBeenCalled();
  });
});
