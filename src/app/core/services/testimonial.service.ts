import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testimonial } from '../types/type';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<Testimonial[]> {
    return this.httpClient.get<Testimonial[]>(`${this.apiUrl}/depoimentos`)
  }
}
