import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListadoProductosFinancierosComponent } from './tabla-listado-productos-financieros.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductoFinanciero } from '../../models/ProductoFinanciero';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('TablaListadoProductosFinancierosComponent', () => {
  let component: TablaListadoProductosFinancierosComponent;
  let fixture: ComponentFixture<TablaListadoProductosFinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaListadoProductosFinancierosComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(
      TablaListadoProductosFinancierosComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a tbody row for each element in listadoProductosFinancieros when searchstring is unset', () => {
    const mockData: ProductoFinanciero[] = [
      new ProductoFinanciero(),
      new ProductoFinanciero(),
    ];
    const element = fixture.debugElement;
    component.listadoProductosFinancieros$ = of(mockData);
    fixture.detectChanges();
    const bodyRows = element.queryAll(By.css('tbody > tr'));
    expect(bodyRows).toHaveSize(2);
  });

  it('should render a tbody row for each element in listadoProductosFinancieros when searchstring is unset', () => {
    const mockData: ProductoFinanciero[] = [
      new ProductoFinanciero(),
      new ProductoFinanciero(),
    ];
    const element = fixture.debugElement;
    component.listadoProductosFinancieros$ = of(mockData);
    fixture.detectChanges();
    const bodyRows = element.queryAll(By.css('tbody > tr'));
    expect(bodyRows).toHaveSize(2);
  });

  it('should render a tbody rows for each element that matches searchString criteria', () => {
    const element = fixture.debugElement;
    const matchString = 'match-id';
    const mockData: ProductoFinanciero[] = [
      new ProductoFinanciero(undefined, undefined, undefined, matchString),
      new ProductoFinanciero(),
    ];
    component.listadoProductosFinancieros$ = of(mockData);
    fixture.detectChanges();
    component.searchString$ = of(matchString);
    fixture.detectChanges();
    const bodyRows = element.queryAll(By.css('tbody > tr'));
    expect(bodyRows).toHaveSize(1);
  });
});
