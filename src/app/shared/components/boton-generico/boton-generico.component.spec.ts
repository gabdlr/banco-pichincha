import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonGenericoComponent } from './boton-generico.component';
import { By } from '@angular/platform-browser';

describe('BotonGenericoComponent', () => {
  let component: BotonGenericoComponent;
  let fixture: ComponentFixture<BotonGenericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonGenericoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BotonGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input buttonText as button innerText', () => {
    const element = fixture.debugElement;
    const placeholder = 'test text';
    fixture.componentRef.instance.buttonText = placeholder;
    fixture.detectChanges();
    expect(
      (element.query(By.css('button')).nativeElement as HTMLButtonElement)
        .innerText
    ).toEqual(placeholder);
    1;
  });

  it('should add buttonBgColor input as button class', () => {
    const element = fixture.debugElement;
    const placeholder = 'gray';
    fixture.componentRef.instance.buttonBgColor = placeholder;
    fixture.detectChanges();
    expect(
      (element.query(By.css('button')).nativeElement as HTMLButtonElement)
        .classList
    ).toContain(placeholder);
  });

  it('should have type input as button type', () => {
    const element = fixture.debugElement;
    const placeholder = 'submit';
    fixture.componentRef.instance.buttonType = placeholder;
    fixture.detectChanges();
    expect(
      (element.query(By.css('button')).nativeElement as HTMLButtonElement).type
    ).toBe(placeholder);
  });

  it('should match disabled status with disabled input', () => {
    const element = fixture.debugElement;
    const placeholder = true;
    fixture.componentRef.instance.disabled = placeholder;
    fixture.detectChanges();
    expect(
      (element.query(By.css('button')).nativeElement as HTMLButtonElement)
        .disabled
    ).toBe(placeholder);
  });
});
