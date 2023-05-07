import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFinancierosComponent } from './productos-financieros.component';

describe('ProductosFinancierosComponent', () => {
  let component: ProductosFinancierosComponent;
  let fixture: ComponentFixture<ProductosFinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProductosFinancierosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosFinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
