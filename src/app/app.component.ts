import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomSingleDropdownComponent } from './custom-single-dropdown/custom-single-dropdown.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomMultipleDropdownComponent } from './custom-multiple-dropdown/custom-multiple-dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, CustomSingleDropdownComponent, CustomMultipleDropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
  form: FormGroup=new FormGroup({});
  foods: Array<any> = [];
  cars: Array<any> = [];
  isDisabled: boolean = false;
  selectedValue1:any={};
  selectedValue2:any={};
  selectedValue3:Array<any> = [];
  showLabel:string = "show";
  valueLabel:string = "value";
  selectedDropdown3Str:string ="";

  constructor(){
    this.form = new FormGroup({
      dropdown1: new FormControl({}),
      dropdown2: new FormControl({}),
      dropdown3: new FormControl([]),
      fname: new FormControl<string>('Kalp'),
      lname: new FormControl<string>('Panwala')
    });

    this.foods = [
      {value: 'steak-0', show: 'Steak'},
      {value: 'pizza-1', show: 'Pizza'},
      {value: 'tacos-2', show: 'Tacos'},
    ];

    this.cars = [
      {value: 'audi-rs', show: 'Audi'},
      {value: 'bmw-x1', show: 'BMW'},
      {value: 'kia-carnival', show: 'Kia'},
    ];
  }

  toggleDisableStatus(){
    this.isDisabled = !this.isDisabled;
  }

  ngOnInit(){
    this.selectedValue1 = this.foods[1];
    this.selectedValue2 = this.cars[1];
    this.selectedValue3 = [this.cars[0],this.cars[1]];

    this.form.valueChanges.subscribe(x=> {
      this.selectedDropdown3Str = this.form.value.dropdown3.map((e:any)=>e.show).join(", ");
    });
  }
}
