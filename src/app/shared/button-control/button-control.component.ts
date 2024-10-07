import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-control',
  templateUrl: './button-control.component.html',
  styleUrl: './button-control.component.scss'
})
export class ButtonControlComponent {

  @Input() operation: 'increment' | 'decrement' = 'increment';
  @Input() src = '';
  @Input() alt = '';
}
