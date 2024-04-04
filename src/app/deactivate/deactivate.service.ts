import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import endpoint from '../../utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class DeactivateService {
  endpointUrl = endpoint + 'account/deactivate'
  constructor(private http:HttpClient) { }

  deactivateAccount(){
    return this.http.post(this.endpointUrl, {})
  }

}
