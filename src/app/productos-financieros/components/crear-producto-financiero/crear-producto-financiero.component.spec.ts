import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearProductoFinancieroComponent } from './crear-producto-financiero.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductoFinancieroService } from '../../services/producto-financiero.service';

describe('CrearProductoFinancieroComponent', () => {
  const productoFinancieroMock = {
    id: 'trj-crd2',
    name: 'Tarjetas de credito',
    description: 'Tarjeta de consume bajo la modalidad de credito',
    logo: 'https://icons-for-free.com/iconfiles/png/512/Mastercard-1320568127572298248.png',
    date_release: '2023-05-08T19:36:55.124Z',
    date_revision: '2024-05-08T19:36:55.124Z',
  };

  let component: CrearProductoFinancieroComponent;
  let fixture: ComponentFixture<CrearProductoFinancieroComponent>;
  let productoFinancieroService: ProductoFinancieroService;
  beforeEach(async () => {
    const productoFinancieroServicespy = jasmine.createSpyObj(
      'ProductoFinancieroService',
      ['createProductoFinanciero']
    );
    await TestBed.configureTestingModule({
      imports: [CrearProductoFinancieroComponent],
      providers: [
        provideHttpClient(),
        ProductoFinancieroService,
        {
          provide: ProductoFinancieroService,
          useValue: productoFinancieroServicespy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearProductoFinancieroComponent);
    productoFinancieroService = TestBed.inject(ProductoFinancieroService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate in add new product', () => {
    const spy = spyOn(component, 'addNewProduct');
    component.addNewProduct(productoFinancieroMock);
    expect(spy).toHaveBeenCalled();
  });

  it('should call createProductoFinanciero on the service', () => {
    productoFinancieroService.createProductoFinanciero(productoFinancieroMock);
    component.addNewProduct(productoFinancieroMock);
    expect(
      productoFinancieroService.createProductoFinanciero
    ).toHaveBeenCalledWith(productoFinancieroMock);
  });
});
