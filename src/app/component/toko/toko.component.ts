import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toko',
  templateUrl: './toko.component.html',
  styleUrls: ['./toko.component.css']
})
export class TokoComponent implements OnInit {
  @Input() idr : {link:string, harga:number, item:string};
  @Input() usd : {link:string, harga:number, item:string};

  constructor() { }

  ngOnInit() {
  }

}
