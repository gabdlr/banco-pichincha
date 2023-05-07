import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarTablaListadoProductosFinancierosComponent } from './searchbar-tabla-listado-productos-financieros.component';

describe('SearchbarTablaListadoProductosFinancierosComponent', () => {
  let component: SearchbarTablaListadoProductosFinancierosComponent;
  let fixture: ComponentFixture<SearchbarTablaListadoProductosFinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SearchbarTablaListadoProductosFinancierosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbarTablaListadoProductosFinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
