import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from './../service/user.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit, AfterViewInit {
  @Input() products: Array<any> = [];

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // const local_result = localStorage.getItem('search_ressult');
    // if (local_result) {
    //   this.products = JSON.parse(local_result);
    // }
  }

  ngAfterViewInit() {
    // $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  onGoItClicked(product: any) {
    console.log(product);
    localStorage.setItem('storage_product', product);
    this.router.navigate(['/product/detail']);
  }

}
