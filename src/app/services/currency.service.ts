import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { Currencyvalue, rates } from 'src/app/classes/currencyvalue'
import { Rates } from '../classes/rates';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  url_currency = "http://localhost:3000/api/rates/";
  url_data = "http://localhost:3000/api/harga/";
  constructor(private http:HttpClient) { }

  // getrates():Observable<any>{
  //   return this.http.get(this.urlcurrency);
  // };

  get_data():Observable<any>{
    return this.http.get(this.url_data);
  }
  get_data_nilai(nilai:number):Observable<any>{
    return this.http.get(this.url_data+nilai);
  }
  get_rates():Observable<any>{
    return this.http.get(this.url_currency);
  }
}

