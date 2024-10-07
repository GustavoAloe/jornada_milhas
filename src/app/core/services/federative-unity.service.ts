import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, shareReplay } from 'rxjs';
import { FederativeUnity } from '../types/type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FederativeUnityService {

  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<FederativeUnity[]>

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<FederativeUnity[]> {
    if (!this.cache$) {
      this.cache$ = this.requestStates().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  private requestStates(): Observable<FederativeUnity[]> {
    return this.http.get<FederativeUnity[]>(`${this.apiUrl}/estados`);
  }
}
