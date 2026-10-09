import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorTernario } from './operador-ternario';

describe('OperadorTernario', () => {
  let component: OperadorTernario;
  let fixture: ComponentFixture<OperadorTernario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperadorTernario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorTernario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
