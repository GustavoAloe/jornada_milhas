import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserPerson } from '../types/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) {}

  register(userPerson: UserPerson): Observable<UserPerson> {
    return this.http.post<UserPerson>(`${this.apiUrl}/auth/cadastro`, userPerson);
  }

  searchRegister(): Observable<UserPerson> {

    return this.http.get<UserPerson>(`${this.apiUrl}/auth/perfil`);
  }

  editRegister(userPerson: UserPerson): Observable<UserPerson> {

    return this.http.patch<UserPerson>(`${this.apiUrl}/auth/perfil`, userPerson);
  }


}
