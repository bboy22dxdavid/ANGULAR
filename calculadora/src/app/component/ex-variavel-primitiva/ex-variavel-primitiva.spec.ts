import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExVariavelPrimitiva } from './ex-variavel-primitiva';

describe('ExVariavelPrimitiva', () => {
  let component: ExVariavelPrimitiva;
  let fixture: ComponentFixture<ExVariavelPrimitiva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExVariavelPrimitiva]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExVariavelPrimitiva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
