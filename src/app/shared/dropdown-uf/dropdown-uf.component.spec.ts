import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUfComponent } from './dropdown-uf.component';

describe('DropdownUfComponent', () => {
  let component: DropdownUfComponent;
  let fixture: ComponentFixture<DropdownUfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownUfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
