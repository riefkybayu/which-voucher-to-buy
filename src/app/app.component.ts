import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'publictest';
  idr = [];
  usd = [];

  async set_data_idr(data : {idr: [{link:any, harga:any, item:any, nilai:any}], usd : [{link:any, harga:any, item:any, nilai:any}]}){
    await this.clear_array();
    let temp_idr = data.idr;
    let temp_usd = data.usd;
    temp_idr.forEach(element => {
      this.idr.push(element);
    });
    temp_usd.forEach(element => {
      this.usd.push(element);
    })
  }
  clear_array(){
    this.idr = [];
    this.usd = [];
  }
}
