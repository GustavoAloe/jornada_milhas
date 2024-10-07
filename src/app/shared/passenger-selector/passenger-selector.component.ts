import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-passenger-selector',
  templateUrl: './passenger-selector.component.html',
  styleUrl: './passenger-selector.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PassengerSelectorComponent),
      multi: true
    }
  ]
})
export class PassengerSelectorComponent implements ControlValueAccessor{
  @Input() title: string = ''
  @Input() subTitle: string = ''

  value: number = 0
  onChange = (val: number) => {}
  onTouch = () => {}

  writeValue(val: any): void {
    this.value = val
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState(isDisabled: boolean): void { 
  }

  increment () {
    this.value += 1
    this.onChange(this.value)
    this.onTouch()
  }

  decrement () {
    if (this.value > 0) {
      this.value -= 1
      this.onChange(this.value)
      this.onTouch()
    }
  }

}
