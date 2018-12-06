import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from './../service/user.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-user-balance',
  templateUrl: './user-balance.component.html',
  styleUrls: ['./user-balance.component.css']
})
export class UserBalanceComponent implements OnInit {
  username: string;
  password: string;
  confirm_password: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  dob_year: string;
  dob_month: string;
  dob_day: string;
  dialogTitle: string;
  dialogBody: string;
  accessToken: string;
  active: boolean;
  balance: number;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const local_username = localStorage.getItem('username');
    const local_accessToken = localStorage.getItem('accessToken');
    if (local_username && local_accessToken) {
      this.username = local_username;
      this.accessToken = local_accessToken;
      this.userService.getUser(this.username, local_accessToken)
        .pipe(first())
        .subscribe(
          data => {
            // router to home page
            const dob = data.dob.split('-');
            this.dob_day = dob[0];
            this.dob_month = dob[1];
            this.dob_year = dob[2];
            this.spinnerService.hide();
            this.username = data.username;
            this.first_name = data.first_name;
            this.last_name = data.last_name;
            this.email = data.email;
            this.phone = data.phone_number;
            this.active = data.active;
            this.balance = Number.parseInt(data.balance);
          },
          err => {
            this.spinnerService.hide();
            this.dialogTitle = 'Get User Failed';
            this.dialogBody = 'Please try angin';
            $('#myModal').modal('show');
          });
    }
  }

  addBalance(value) {
    this.balance = this.balance + Number.parseInt(value);
  }

  submit() {
    this.userService.addBalance(this.username, this.balance.toString(), this.accessToken)
            .pipe(first())
            .subscribe(
                data => {
                    // router to home page
                    this.spinnerService.hide();
                    this.router.navigate(['/user/profile']);
                },
                err => {
                  this.spinnerService.hide();
                  this.dialogTitle = 'Add Balance Failed';
                  this.dialogBody = 'Please try angin';
                  $('#myModal').modal('show');
                });
  }
}
