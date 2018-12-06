import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ProductSearchComponent } from '../product-search/product-search.component';

@Component({
  selector: 'app-product-search-result',
  templateUrl: './product-search-result.component.html',
  styleUrls: ['./product-search-result.component.css']
})
export class ProductSearchResultComponent implements OnInit {
  @Input() products: Array<any> = [];
  private productList: Array<any>;
  constructor() { }

  ngOnInit() {
    this.productList = this.products;
    console.log(this.productList);
    console.log(this.products);
  }

  onSearchChange($event) {
    console.log($event);
  }
}
