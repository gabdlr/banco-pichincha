import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListadoProductosFinancierosComponent } from './tabla-listado-productos-financieros.component';

describe('TablaListadoProductosFinancierosComponent', () => {
  let component: TablaListadoProductosFinancierosComponent;
  let fixture: ComponentFixture<TablaListadoProductosFinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TablaListadoProductosFinancierosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaListadoProductosFinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
