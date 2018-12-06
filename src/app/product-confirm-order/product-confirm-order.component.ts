import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pproduct-confirm-order',
  templateUrl: './pproduct-confirm-order.component.html',
  styleUrls: ['./pproduct-confirm-order.component.css']
})
export class ProductConfirmOrderComponent implements OnInit {

  demo_items = [{
    'id': 1,
    'name': 'Mustard - Dijon',
    'pic': 'http://dummyimage.com/200x200.bmp/ff4444/ffffff',
    'price': 223.07,
    'desc': 'quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus'
  }, {
    'id': 2,
    'name': 'Coke - Classic, 355 Ml',
    'pic': 'http://dummyimage.com/200x200.jpg/cc0000/ffffff',
    'price': 150.81,
    'desc': 'dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique'
  }, {
    'id': 3,
    'name': 'Wine - Penfolds Koonuga Hill',
    'pic': 'http://dummyimage.com/200x200.bmp/ff4444/ffffff',
    'price': 379.17,
    'desc': 'hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero'
  }];
  constructor() { }

  ngOnInit() {
  }

}
