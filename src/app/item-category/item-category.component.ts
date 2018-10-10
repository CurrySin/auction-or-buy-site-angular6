import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent implements OnInit, AfterViewInit {
  lastScrollTop = 0;
  sidebar = 200;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const _this = this;
    $( window ).scroll(function(e) {
      const st = $(this).scrollTop();
      if (st > this.lastScrollTop) {
          // downscroll code
          // console.log(`scroll down st: ${st}, lastScrollTop: ${this.lastScrollTop}`);
          $('.nav-side-menu').css('top', (_this.sidebar - st) + 'px');
      } else {
         // upscroll code
        //  console.log(`scroll up st: ${st}, lastScrollTop: ${this.lastScrollTop}`);
         $('.nav-side-menu').css('top', (_this.sidebar + st) + 'px');
      }
      this.lastScrollTop = st;
    });
  }

}
