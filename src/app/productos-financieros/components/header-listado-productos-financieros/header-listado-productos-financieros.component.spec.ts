import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderListadoProductosFinancierosComponent } from './header-listado-productos-financieros.component';

describe('HeaderListadoProductosFinancierosComponent', () => {
  let component: HeaderListadoProductosFinancierosComponent;
  let fixture: ComponentFixture<HeaderListadoProductosFinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeaderListadoProductosFinancierosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderListadoProductosFinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
