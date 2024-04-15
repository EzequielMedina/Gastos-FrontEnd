import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePeriodoComponent } from './create-periodo.component';

describe('CreatePeriodoComponent', () => {
  let component: CreatePeriodoComponent;
  let fixture: ComponentFixture<CreatePeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePeriodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
