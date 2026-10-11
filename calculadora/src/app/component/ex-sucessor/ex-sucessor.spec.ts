import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExSucessor } from './ex-sucessor';

describe('ExSucessor', () => {
  let component: ExSucessor;
  let fixture: ComponentFixture<ExSucessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExSucessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExSucessor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
