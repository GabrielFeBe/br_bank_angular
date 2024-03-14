import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import endpoint from '../../utils/endpoint';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = endpoint + 'auth/login'
  constructor(private http:HttpClient) { }

login(account:Login):Observable<string>{
  return this.http.post<string>(endpoint, account);
}

}
