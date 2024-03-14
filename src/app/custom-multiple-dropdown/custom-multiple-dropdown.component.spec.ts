import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMultipleDropdownComponent } from './custom-multiple-dropdown.component';

describe('CustomDropdownComponent', () => {
  let component: CustomMultipleDropdownComponent;
  let fixture: ComponentFixture<CustomMultipleDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomMultipleDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomMultipleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
