import { Injectable } from '@angular/core';
import endpoint from '../../utils/endpoint';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Account from '../../utils/account';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private accountUrl = endpoint + "account" 
  constructor(private http:HttpClient) { }

  createAccount(account:Account):Observable<Partial<Account>> {
    return this.http.post(this.accountUrl, account);
  }
}
