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

  public getBankStatment( isPrecise:boolean ,month:number | null):Observable<any> {
    let monthNumber:number;
    if(!month) {
      monthNumber = new Date().getMonth() + 1;
    } else {
      monthNumber = month;
    }
    
    if(isPrecise) {
      this.endpointUrl = this.endpointUrl + `?month=${monthNumber}`;
    }

    return this.http.get(this.endpointUrl);
  }
}
