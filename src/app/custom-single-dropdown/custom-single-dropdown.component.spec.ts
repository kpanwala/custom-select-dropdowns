import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSingleDropdownComponent } from './custom-single-dropdown.component';

describe('CustomDropdownComponent', () => {
  let component: CustomSingleDropdownComponent;
  let fixture: ComponentFixture<CustomSingleDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSingleDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomSingleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
