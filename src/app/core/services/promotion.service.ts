import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotion } from '../types/type';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<Promotion[]> {
    return this.httpClient.get<Promotion[]>(`${this.apiUrl}/promocoes`)
  }
}
