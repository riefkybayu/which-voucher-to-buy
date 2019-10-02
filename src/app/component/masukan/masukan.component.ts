import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CurrencyService } from 'src/app/services/currency.service';
import { Currencyvalue, rates } from 'src/app/classes/currencyvalue'
import { Rates } from 'src/app/classes/rates';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-masukan',
  templateUrl: './masukan.component.html',
  styleUrls: ['./masukan.component.css']
})
export class MasukanComponent implements OnInit {
  angularform = new FormGroup({
    saldo: new FormControl(),
    harga: new FormControl(),
  })
  @Output() set_toko_idr = new EventEmitter();
  @Output() set_toko_usd = new EventEmitter();

  constructor(private currency:CurrencyService) { }

  send_toko(){
    const value = this.angularform.value;
    this.currency.get_data_nilai(value.harga - value.saldo).subscribe(async (data) => {
      try{
      let idr_array = data.idr;
      let usd_array = data.usd;
      let data_res_idr = [];
      let data_res_usd = [];
      idr_array.forEach(element => {
        let link = element[0].link;
        let harga = element[0].harga;
        let item = element[0].nilai;
        let nilai = element[0].nilai_idr;
        data_res_idr.push({link, harga, item, nilai})
      });
      usd_array.forEach(element => {
        let link = element[0].link;
        let harga = element[0].harga;
        let item = element[0].nilai;
        let nilai = element[0].nilai_idr;
        data_res_usd.push({link, harga, item, nilai})
      });      
        this.set_toko_idr.emit({"idr" : data_res_idr, "usd" : data_res_usd});
      }
      catch(err){
        console.log(err);
      }
    })
  }
  ngOnInit():void {
    // this.currency.getrates().subscribe((data) => {
    //   this.data = Object.values(data);
    //   this.rates = Object.values(data.rates);
    //   console.log(this.data);
    //   console.log(this.rates);
    //   this.rates_idr = this.rates[10];
    //   this.rates_usd = this.rates[26];
    //   console.log(this.rates_idr);
    //   console.log(this.rates_usd);
    // })
    // this.currency.get_data().subscribe((data) => {
    //     let passed_data = Object.values(data);
    //     for(let i=0; i<1; i++){
    //       let temp_data = Object.values(passed_data[i]);
    //       for(let j=0; j<1; j++){
    //         let array_data= Object.values(temp_data[j]);
    //         let object_data = array_data[0];
    //       }
    //     }
        
    //     //batas gk dipake
    //     // let temp_data_0 = temp_data[0];
    //     // let temp_data_1 = temp_data_0[0];
    //     // let object : {link:any, tipe:any, value:any, value_idr:any, harga:any}
    //     // //object.link = temp_data_0.link;
    //     // console.log(temp_data_1);
    //     //batas gk dipake
    // })
  }

  // konversi(){
  //   this.nilaiuang_idr = Number(this.nilai.value).toFixed(2);
  //   this.nilaiuang_eur = Number(this.nilai.value/this.rates_idr).toFixed(2);
  //   this.nilaiuang_usd = Number(this.nilaiuang_eur * this.rates_usd).toFixed(2);
  // }

  // setrates(data : any){
    
  // }

  hitung = async() => {
    const value = this.angularform.value;
    this.currency.get_data_nilai(value.harga - value.saldo).subscribe(async (data) => {
      let idr_array = data.idr;
      let usd_array = data.usd;
      
      // this.link = idr_array[0][0].link;
      // this.harga = idr_array[0][0].harga;
      // this.item = idr_array[0][0].nilai;
    });
  }


}
