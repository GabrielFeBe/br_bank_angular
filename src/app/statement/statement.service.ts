import { Injectable } from '@angular/core';
import endpoint from '../../utils/endpoint';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatementService {
  private endpointUrl = endpoint + 'statement'
  constructor(private http:HttpClient){ }

  public getBankStatment():Observable<any> {
    return this.http.get(this.endpointUrl);
  }
}
