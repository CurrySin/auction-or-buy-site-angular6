import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor() { }

  ngOnInit() {
    const local_product = localStorage.getItem('storage_product');
    if (local_product) {
      this.product = JSON.parse(local_product);
    }
  }

}
