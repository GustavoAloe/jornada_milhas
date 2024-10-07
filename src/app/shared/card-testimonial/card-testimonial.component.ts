import { Component, Input } from '@angular/core';
import { Testimonial } from '../../core/types/type';

@Component({
  selector: 'app-card-testimonial',
  templateUrl: './card-testimonial.component.html',
  styleUrl: './card-testimonial.component.scss'
})
export class CardTestimonialComponent {
  
  @Input() testimonial!: Testimonial
}
