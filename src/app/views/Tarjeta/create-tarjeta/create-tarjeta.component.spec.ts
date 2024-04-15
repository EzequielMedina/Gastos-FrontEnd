import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTarjetaComponent } from './create-tarjeta.component';

describe('CreateTarjetaComponent', () => {
  let component: CreateTarjetaComponent;
  let fixture: ComponentFixture<CreateTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
