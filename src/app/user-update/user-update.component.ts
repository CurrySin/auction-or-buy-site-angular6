import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from './../service/user.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
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
          },
          err => {
            this.spinnerService.hide();
            this.dialogTitle = 'Get User Failed';
            this.dialogBody = 'Please try angin';
            $('#myModal').modal('show');
          });
    }
  }

  onSubmit() {
    if (this.username &&
      this.first_name && this.last_name && this.email &&
      this.phone && this.dob_year && this.dob_month &&
      this.dob_day) {
      if ((this.password || this.confirm_password) && (this.password !== this.confirm_password)) {
        this.dialogTitle = 'Password Error';
        this.dialogBody = 'Password and Confirm Password are not same';
        $('#myModal').modal('show');
      } else {
        this.spinnerService.show();
        this.userService.updateUser(this.username, {
          username: this.username,
          first_name: this.first_name,
          last_name: this.last_name,
          phone_number: this.phone,
          dob: this.dob_day + '-' + this.dob_month + '-' + this.dob_year,
          email: this.email,
          active: this.active
        }, this.accessToken)
          .pipe(first())
          .subscribe(
            user => {
              // router to home page
              this.spinnerService.hide();
              if ((this.password || this.confirm_password) && (this.password === this.confirm_password)) {
                this.userService.chagnePassword(this.username, {
                  password: this.password,
                  new_password: this.confirm_password
                }, this.accessToken)
                  .pipe(first())
                  .subscribe(
                    data => {
                      // router to home page
                      this.spinnerService.hide();
                      this.router.navigate(['/user/profile']);
                    },
                    err => {
                      this.spinnerService.hide();
                      this.dialogTitle = 'Chagne Password Failed';
                      this.dialogBody = 'Please try angin';
                      $('#myModal').modal('show');
                    });
              } else {
                this.spinnerService.hide();
                this.router.navigate(['/user/profile']);
              }
            },
            err => {
              this.spinnerService.hide();
              this.dialogTitle = 'Update User Failed';
              this.dialogBody = 'Please try angin';
              $('#myModal').modal('show');
            });
      }
    } else {
      this.dialogTitle = 'Input messing';
      this.dialogBody = 'All field are require';
      $('#myModal').modal('show');
    }
  }

}
