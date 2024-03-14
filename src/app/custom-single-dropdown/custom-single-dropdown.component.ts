import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'custom-single-dropdown',
  standalone: true,
  imports: [MatSelectModule, ReactiveFormsModule, CommonModule],
  templateUrl: './custom-single-dropdown.component.html',
  styleUrl: './custom-single-dropdown.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSingleDropdownComponent),
      multi: true
    }
  ]
})
export class CustomSingleDropdownComponent implements ControlValueAccessor, OnInit{
  title:string = '';
  @Input() dropdownValues:Array<any>=[];
  @Input() formControl:FormControl | undefined;
  @Input() formControlName:string="";
  @Input() disabled = true;
  @Input() selectedValue:any = {};
  @Input() show:string = "";
  @Input() valueLabel:string = "";


  value: any;
  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() { }

  ngOnInit() {
    console.log(this.disabled);
  }

  //
  writeValue(value: any): void {
    this.value = this.selectedValue;
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setValue(newValue: any) {
    this.value = newValue;
    this.onChange(this.value);
    this.onTouch();
  }
}
