import { MenuFlotanteDirective } from './menu-flotante.directive';
import { ComponentRef, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuFlotanteListadoProductosFinancierosComponent } from '../components/menu-flotante-listado-productos-financieros/menu-flotante-listado-productos-financieros.component';
describe('MenuFlotanteDirective', () => {
  let viewContainerRef: ViewContainerRef;
  let fixture: ComponentFixture<MenuFlotanteListadoProductosFinancierosComponent>;
  let component: MenuFlotanteListadoProductosFinancierosComponent;

  beforeEach(async () => {
    const listadoProductosFinancierosServiceSpy = jasmine.createSpyObj(
      'ViewContainerRef',
      ['createComponent']
    );

    await TestBed.configureTestingModule({
      imports: [MenuFlotanteListadoProductosFinancierosComponent],
      providers: [
        {
          provide: ViewContainerRef,
          useValue: listadoProductosFinancierosServiceSpy,
        },
      ],
    }).compileComponents();
    viewContainerRef = TestBed.inject(ViewContainerRef);
    fixture = TestBed.createComponent(
      MenuFlotanteListadoProductosFinancierosComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new MenuFlotanteDirective(viewContainerRef);
    expect(directive).toBeTruthy();
  });

  it('should load component if elementRef is undefined', () => {
    const directive = new MenuFlotanteDirective(viewContainerRef);
    const directiveSpy = spyOn(directive, 'loadComponent');
    viewContainerRef.createComponent = () =>
      ({ instance: { data: {} } } as ComponentRef<any>);
    directive.loadComponent();
    directive.elementRef = undefined;
    directive.load(new MouseEvent('click') as PointerEvent);
    expect(directiveSpy).toHaveBeenCalled();
  });

  it("should unload component if elementRef is defined and doesn't contains event.target", () => {
    const directive = new MenuFlotanteDirective(viewContainerRef);
    const directiveSpy = spyOn(directive, 'unloadComponent');
    viewContainerRef.createComponent = () =>
      ({ instance: { data: {} } } as ComponentRef<any>);
    directive.loadComponent();
    directive.elementRef = { nativeElement: { contains: (arg: any) => false } };
    directive.load(new MouseEvent('click') as PointerEvent);
    expect(directiveSpy).toHaveBeenCalled();
  });

  it('should swipe container ref after unload', () => {
    viewContainerRef.clear = () => undefined;
    const directive = new MenuFlotanteDirective(viewContainerRef);
    const directiveSpy = spyOn(viewContainerRef, 'clear');
    directive.unloadComponent();
    expect(directiveSpy).toHaveBeenCalled();
  });
});
