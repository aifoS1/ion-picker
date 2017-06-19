import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ion-picker',
  templateUrl: 'ion-picker.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IonPicker),
      multi: true
    }
  ]
})
export class IonPicker implements ControlValueAccessor {
  @Input() items: Array<any>;
  @Input('value') _value: any;
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this._value;
  }
  
  set value(val) {
    this._value = val;    
    this.onChange(val);
  }

  constructor() { }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  selectValue(value) {
    this.value = value;
  }

  getSelectedValue() {
    return this.value;
  }

}