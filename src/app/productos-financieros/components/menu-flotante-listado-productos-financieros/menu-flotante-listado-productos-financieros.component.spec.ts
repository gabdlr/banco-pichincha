import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFlotanteListadoProductosFinancierosComponent } from './menu-flotante-listado-productos-financieros.component';

describe('MenuFlotanteListadoProductosFinancierosComponent', () => {
  let component: MenuFlotanteListadoProductosFinancierosComponent;
  let fixture: ComponentFixture<MenuFlotanteListadoProductosFinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MenuFlotanteListadoProductosFinancierosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFlotanteListadoProductosFinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
