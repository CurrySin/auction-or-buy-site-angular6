import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { first } from 'rxjs/operators';
import { ProductService } from '../service/product.service';
import { UserService } from '../service/user.service';

declare const $: any;

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  dialogTitle: string;
  dialogBody: string;
  title: string;
  sub_title: string;
  image: Array<any> = [];
  name: string;
  type: string;
  category: string;
  sub_category: string;
  duration: string;
  price: string;
  target_bid: string;
  per_bid: string;
  quantity: string;
  shipping_included: boolean;
  shipping_info: Array<any> = [];
  status: string;
  active: boolean;
  start_time: string;
  end_time: string;
  buyer: string;
  seller: String;
  accessToken: string;
  refreshToken: string;
  username: string;
  endDate: Date;
  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const local_accessToken = localStorage.getItem('accessToken');
    const local_refreshToken = localStorage.getItem('refreshToken');
    const lcoal_username = localStorage.getItem('username');
    if (!local_accessToken || !lcoal_username) {
      this.router.navigate(['/login']);
    } else {
      this.accessToken = local_accessToken;
      this.username = lcoal_username;
      this.refreshToken = local_refreshToken;
    }
  }

  onSubmit() {
    if (this.type === 'auction') {
      if (this.title && this.sub_title && this.sub_category &&
        this.type &&
        this.target_bid && this.quantity &&
        this.category &&
        this.per_bid) {
        this.spinnerService.show();
        this.productService.create({
          title: this.title,
          sub_title: this.sub_title,
          category: this.category,
          sub_category: this.sub_category,
          name: 'none',
          type: this.type,
          price: 'none',
          quantity: this.quantity,
          shipping_included: false,
          status: 'on_sell',
          start_time: new Date().getTime(),
          end_time: new Date(this.endDate).getTime(),
          duration: new Date(this.endDate).getTime() - new Date().getTime(),
          target_bid: this.target_bid,
          per_bid: this.per_bid,
          seller: this.username,
        }, this.accessToken)
          .pipe(first())
          .subscribe(
            data => {
              // router to home page
              this.spinnerService.hide();
              console.log(data);
              const productImage = $('#productImage').files[0];
              const input = new FormData();
              if (productImage) {
                this.spinnerService.show();
                input.append('productImage', productImage);
                this.productService.uploadImage(input, data._id, this.accessToken)
                  .pipe(first())
                  .subscribe(
                    response => {
                      // router to home page
                      this.spinnerService.hide();
                      this.dialogTitle = 'Create Auction Product';
                      this.dialogBody = 'Create success';
                      $('#myModal').modal('show');
                    },
                    err => {
                      this.spinnerService.hide();
                      this.dialogTitle = 'Upload Failed';
                      this.dialogBody = 'Please try angin';
                      $('#myModal').modal('show');
                    });
              }
            },
            err => {
              console.log(err);
              if (err.error.error.name === 'TokenExpiredError') {
                this.spinnerService.show();
                this.userService.refreshToken(this.username, this.refreshToken)
                  .pipe(first())
                  .subscribe(
                    result => {
                      // router to home page
                      this.spinnerService.hide();
                    },
                    error => {
                      this.spinnerService.hide();
                      this.dialogTitle = 'Login Failed';
                      this.dialogBody = 'Please try angin';
                      $('#myModal').modal('show');
                    });
              }
              this.spinnerService.hide();
              this.dialogTitle = 'Login Failed';
              this.dialogBody = 'Please try angin';
              $('#myModal').modal('show');
            });
      } else {
        this.dialogTitle = 'Input messing';
        this.dialogBody = 'Please input all field';
        $('#myModal').modal('show');
      }
    } else {
      if (this.title && this.sub_title && this.sub_category &&
        this.type && this.price && this.quantity &&
        this.category) {
        this.spinnerService.show();
        this.productService.create({
          title: this.title,
          sub_title: this.sub_title,
          category: this.category,
          sub_category: this.sub_category,
          name: 'none',
          type: this.type,
          price: this.price,
          quantity: this.quantity,
          shipping_included: false,
          status: 'on_sell',
          start_time: new Date().getTime(),
          end_time: 'none',
          seller: this.username
        }, this.accessToken)
          .pipe(first())
          .subscribe(
            data => {
              // router to home page
              this.spinnerService.hide();
              const productImage = $('#productImage').files[0];
              const input = new FormData();
              if (productImage) {
                this.spinnerService.show();
                input.append('productImage', productImage);
                this.productService.uploadImage(input, data._id, this.accessToken)
                  .pipe(first())
                  .subscribe(
                    response => {
                      // router to home page
                      this.spinnerService.hide();
                      this.dialogTitle = 'Create Auction Product';
                      this.dialogBody = 'Create success';
                      $('#myModal').modal('show');
                    },
                    err => {
                      this.spinnerService.hide();
                      this.dialogTitle = 'Upload Failed';
                      this.dialogBody = 'Please try angin';
                      $('#myModal').modal('show');
                    });
              }
            },
            err => {
              console.log(err);
              if (err.error.error.name === 'TokenExpiredError') {
                this.spinnerService.show();
                this.userService.refreshToken(this.username, this.refreshToken)
                  .pipe(first())
                  .subscribe(
                    result => {
                      // router to home page
                      this.spinnerService.hide();
                    },
                    error => {
                      this.spinnerService.hide();
                      this.dialogTitle = 'Login Failed';
                      this.dialogBody = 'Please try angin';
                      $('#myModal').modal('show');
                    });
              }
              this.spinnerService.hide();
              this.dialogTitle = 'Login Failed';
              this.dialogBody = 'Please try angin';
              $('#myModal').modal('show');
            });
      } else {
        this.dialogTitle = 'Input messing';
        this.dialogBody = 'Please input all field';
        $('#myModal').modal('show');
      }
    }
  }
}
class NGIfElse {
  show = false;
}