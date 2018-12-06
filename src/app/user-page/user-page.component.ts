import { Component, OnInit, AfterViewInit} from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
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
  }, {
    'id': 4,
    'name': 'Sorrel - Fresh',
    'pic': 'http://dummyimage.com/200x200.jpg/ff4444/ffffff',
    'price': 478.29,
    'desc': 'cras pellentesque volutpat dui maecenas tristique est et tempus semper'
  }, {
    'id': 5,
    'name': 'Table Cloth 54x72 White',
    'pic': 'http://dummyimage.com/200x200.jpg/cc0000/ffffff',
    'price': 498.86,
    'desc': 'vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus'
  }, {
    'id': 6,
    'name': 'Chocolate Eclairs',
    'pic': 'http://dummyimage.com/200x200.png/ff4444/ffffff',
    'price': 355.92,
    'desc': 'nec molestie sed justo pellentesque viverra pede ac diam cras'
  }];

  constructor() { }

  ngOnInit() {
  }

}
