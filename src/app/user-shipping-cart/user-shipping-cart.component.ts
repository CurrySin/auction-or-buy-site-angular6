import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-shipping-cart',
  templateUrl: './user-shipping-cart.component.html',
  styleUrls: ['./user-shipping-cart.component.css']
})
export class UserShippingCartComponent implements OnInit {

  demo_items = [{
    'id': 1,
    'name': 'Mustard - Dijon',
    'pic': 'http://dummyimage.com/200x200.bmp/ff4444/ffffff',
    'price': 223.07,
    'seller': 'person 1',
    'quantity':1,
    'desc': 'quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus'
  }, {
    'id': 2,
    'name': 'Coke - Classic, 355 Ml',
    'pic': 'http://dummyimage.com/200x200.jpg/cc0000/ffffff',
    'price': 150.81,
    'seller': 'person 2',
    'quantity':3,
    'desc': 'dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique'
  }, {
    'id': 3,
    'name': 'Wine - Penfolds Koonuga Hill',
    'pic': 'http://dummyimage.com/200x200.bmp/ff4444/ffffff',
    'price': 379.17,
    'seller': 'person 3',
    'quantity':2,
    'desc': 'hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis'
  }, {
    'id': 4,
    'name': 'Sorrel - Fresh',
    'pic': 'http://dummyimage.com/200x200.jpg/ff4444/ffffff',
    'price': 478.29,
    'seller': 'person 4',
    'quantity':2,
    'desc': 'cras pellentesque volutpat dui maecenas tristique est et tempus semper'
  }, {
    'id': 5,
    'name': 'Table Cloth 54x72 White',
    'pic': 'http://dummyimage.com/200x200.jpg/cc0000/ffffff',
    'price': 498.86,
    'seller': 'person 5',
    'quantity':4,
    'desc': 'vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus'
  }, {
    'id': 6,
    'name': 'Chocolate Eclairs',
    'pic': 'http://dummyimage.com/200x200.png/ff4444/ffffff',
    'price': 355.92,
    'seller': 'person 6',
    'quantity':2,
    'desc': 'nec molestie sed justo pellentesque viverra pede ac diam cras'
  }, {
    'id': 7,
    'name': 'Jagermeister',
    'pic': 'http://dummyimage.com/200x200.bmp/ff4444/ffffff',
    'price': 463.8,
    'seller': 'person 7',
    'quantity':1,
    'desc': 'eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat'
  }, {
    'id': 8,
    'name': 'Tofu - Soft',
    'pic': 'http://dummyimage.com/200x200.png/cc0000/ffffff',
    'price': 182.16,
    'seller': 'person 8',
    'quantity':3,
    'desc': 'praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut'
  }, {
    'id': 9,
    'name': 'Wine - Kwv Chenin Blanc South',
    'pic': 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
    'price': 100.52,
    'seller': 'person 9',
    'quantity':1,
    'desc': 'nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis'
  }, {
    'id': 10,
    'name': 'Wine - Tribal Sauvignon',
    'pic': 'http://dummyimage.com/200x200.png/dddddd/000000',
    'price': 298.99,
    'seller': 'person 10',
    'quantity':2,
    'desc': 'molestie lorem quisque ut erat curabitur gravida nisi at nibh in'
  }];
  constructor() { }

  ngOnInit() {
  }

}
