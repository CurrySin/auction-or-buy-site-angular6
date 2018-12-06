import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit {

  demo_items = [{
    'id': 1,
    'name': 'Mustard - Dijon',
    'pic': 'http://dummyimage.com/200x200.bmp/ff4444/ffffff',
    'price': 223.07,
    
  },]


  constructor() { }

  ngOnInit() {
  }

}
