import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

// dependency injection to bring an already-
// instantiated object to use out of the box without 
// any building or congfiguration
  constructor(private http: HttpClient) { }

  getRates(base: string): Observable<ExchangeRatesResponse> {
    // have to use `` not '' to use template literals
    return this.http.get<ExchangeRatesResponse>(`https://api.exchangerate.host/latest?source=ecb&base=${base}`);
  }
}
