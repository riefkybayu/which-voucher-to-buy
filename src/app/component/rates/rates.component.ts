import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  IDR : number;
  USD : number;
  constructor(private currency:CurrencyService) { }

  ngOnInit() {
    this.currency.get_rates().subscribe((data)=>{
      this.IDR = data.IDR;
      this.USD = data.USD;
    })
  }

}
