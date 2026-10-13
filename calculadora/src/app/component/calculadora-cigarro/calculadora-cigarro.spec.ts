import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCigarro } from './calculadora-cigarro';

describe('CalculadoraCigarro', () => {
  let component: CalculadoraCigarro;
  let fixture: ComponentFixture<CalculadoraCigarro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraCigarro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraCigarro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
