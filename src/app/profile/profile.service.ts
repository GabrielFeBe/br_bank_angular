import { Injectable } from '@angular/core';
import endpoint from '../../utils/endpoint';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Account from '../../utils/account';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  endpointUrl = endpoint + 'account'
  constructor(private http:HttpClient) { }

 getAccount():Observable<any>{
  return this.http.get<any>(this.endpointUrl);
 }
 depositMoney(money:number) :Observable<number>{
return this.http.post<number>(this.endpointUrl + '/deposit',{money})
 }

 prepareTransfer(cpf:string):Observable<any>{
  return this.http.post(this.endpointUrl + '/prepare', {cpf});
 }

 confirmTransfer(cpf:string,money:number):Observable<number> {
  return this.http.post<number>(this.endpointUrl +  '/transfer', {cpf,money})
 }

}
