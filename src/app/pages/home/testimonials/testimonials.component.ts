import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../../core/types/type';
import { TestimonialService } from '../../../core/services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit{

  testimonial!: Testimonial[];

  constructor(
    private service: TestimonialService,
  ) {}

  ngOnInit(): void {
    this.service.list().subscribe(
      res => {
        this.testimonial = res;
      }
    )
  }
}