import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position:number,
  name:string,
  symbol: string;
  price: number;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Bitcoin',  symbol: 'BTC',price:29000},
  {position: 2, name: 'Ethereum', symbol: 'ETH',price:2000},
];
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})



export class WatchListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myData=[
    {
      id:1,
      symbol:'BTC',
      price:29000
    }
  ]
  displayedColumns: string[] = ['position', 'name', 'symbol', 'price'];
  dataSource = ELEMENT_DATA;
  

}
