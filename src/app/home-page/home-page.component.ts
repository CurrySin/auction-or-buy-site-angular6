import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  onSearchChange(products: Array<any>) {
    this.products = products;
  }
}
