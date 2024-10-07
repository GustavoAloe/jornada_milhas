import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerSelectorComponent } from './passenger-selector.component';

describe('PassengerSelectorComponent', () => {
  let component: PassengerSelectorComponent;
  let fixture: ComponentFixture<PassengerSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassengerSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassengerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
