import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from './../service/user.service';
import { ProductService } from './../service/product.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  dialogTitle: string;
  dialogBody: string;
  searchKey: string;
  @Output() searchChange: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  private productList: Array<any>;
  isError: Boolean = false;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSearch() {
    if (this.searchKey) {
      this.spinnerService.show();
      this.productService.searchByKey(this.searchKey)
        .pipe(first())
        .subscribe(
          (data: any) => {
            // router to home page
            this.spinnerService.hide();
            if (data.length > 0) {
              this.searchChange.emit(data);
              console.log('data');
              localStorage.setItem('search_ressult', JSON.stringify(data));
              // this.router.navigate(['/product/result']);
            } else {
              this.dialogTitle = 'Search Done';
              this.dialogBody = 'found 0 from keyword: ' + this.searchKey;
              $('#myModal').modal('show');
            }
          },
          err => {
            this.spinnerService.hide();
            this.dialogTitle = 'Login Failed';
            this.dialogBody = 'Please try angin';
            $('#myModal').modal('show');
            this.userService.logout().then(res => {
              this.isError = true;
            });
          });
    } else {
      this.dialogTitle = 'Input messing';
      this.dialogBody = 'Please input key to search';
      $('#myModal').modal('show');
    }
  }

  onCloseClikced() {
    this.router.navigate(['/login']);
  }
}
