import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ProductService } from './../service/product.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent implements OnInit, AfterViewInit {
  lastScrollTop = 0;
  sidebar = 200;
  dialogTitle: string;
  dialogBody: string;
  @Output() searchChange: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private productService: ProductService,
    private router: Router
  ) { }

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

  searchByCategory(category: string) {
    this.spinnerService.show();
    this.productService.searchByCategroy(category)
            .pipe(first())
            .subscribe(
                (data: any) => {
                    // router to home page
                    this.spinnerService.hide();
                    this.searchChange.emit(data);
                },
                err => {
                  this.spinnerService.hide();
                  this.dialogTitle = 'Search Failed';
                  this.dialogBody = 'Please try angin';
                  $('#myModal').modal('show');
                });
  }

  searchBySubCategory(sub_category: string) {
    this.spinnerService.show();
    this.productService.searchBySubCategroy(sub_category)
            .pipe(first())
            .subscribe(
                (data: any) => {
                    // router to home page
                    this.spinnerService.hide();
                    this.searchChange.emit(data);
                },
                err => {
                  this.spinnerService.hide();
                  this.dialogTitle = 'Search Failed';
                  this.dialogBody = 'Please try angin';
                  $('#myModal').modal('show');
                });
  }
}
