import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit, AfterViewInit {
  @Input() products: Array<any> = [];

  constructor() { }

  ngOnInit() {
    // const local_result = localStorage.getItem('search_ressult');
    // if (local_result) {
    //   this.products = JSON.parse(local_result);
    // }
  }

  ngAfterViewInit() {
    // $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

}
