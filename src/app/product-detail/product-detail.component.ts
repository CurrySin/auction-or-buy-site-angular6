import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from './../service/user.service';
import { first } from 'rxjs/operators';
import { ProductService } from '../service/product.service';

declare const $: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  accessToken: string;
  dialogTitle: string;
  dialogBody: string;
  username: string;
  isError: Boolean = false;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const local_product = localStorage.getItem('storage_product');
    const local_accessToken = localStorage.getItem('accessToken');
    const local_username = localStorage.getItem('username');
    if (local_product) {
      this.product = JSON.parse(local_product);
    }
    if (local_accessToken && local_username) {
      this.accessToken = local_accessToken;
      this.username = local_username;
    }
    console.log(this.product);
  }

  onGetItClicked() {
    console.log('[DEBUG] button clicked');
    if (this.username && this.accessToken) {
      this.spinnerService.show();
      this.productService.buyAProduct(this.username, this.product._id, this.accessToken)
        .pipe(first())
        .subscribe(
          data => {
            // router to home page
            this.spinnerService.hide();
            this.dialogTitle = 'Buy Scessuss';
            this.dialogBody = 'The Product was bought scessuss';
            $('#myModal').modal('show');
            this.product.quantity = Number.parseInt(this.product.quantity) - 1;
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
      this.dialogTitle = 'Auth Failed';
      this.dialogBody = 'Please Login';
      $('#myModal').modal('show');
      this.userService.logout().then(res => {
        this.isError = true;
      });
    }
  }

  onCloseClikced() {
    this.router.navigate(['/login']);
  }
}
