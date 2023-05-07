import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProductosFinancierosComponent } from './listado-productos-financieros.component';

describe('ListadoProductosFinancierosComponent', () => {
  let component: ListadoProductosFinancierosComponent;
  let fixture: ComponentFixture<ListadoProductosFinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ListadoProductosFinancierosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoProductosFinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
