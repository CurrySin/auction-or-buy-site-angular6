import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from './../service/user.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
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

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.username && this.password && this.confirm_password &&
      this.first_name && this.last_name && this.email &&
      this.phone && this.dob_year && this.dob_month &&
      this.dob_day) {
      if (this.password === this.confirm_password) {
        this.userService.register({
          username: this.username,
          password: this.password,
          first_name: this.first_name,
          last_name: this.last_name,
          phone_number: this.phone,
          dob: this.dob_day + '-' + this.dob_month + '-' + this.dob_year,
          email: this.email
        })
          .pipe(first())
          .subscribe(
            data => {
              this.spinnerService.hide();
              localStorage.setItem('username', data.username);
              this.router.navigate(['/user/verify']);
            },
            err => {
              this.spinnerService.hide();
              this.dialogTitle = 'Register Failed';
              this.dialogBody = 'Please try angin';
              $('#myModal').modal('show');
            });
      } else {
        this.dialogTitle = 'Password Error';
        this.dialogBody = 'Password and Confirm Password are not same';
        $('#myModal').modal('show');
      }
    } else {
      this.dialogTitle = 'Input messing';
      this.dialogBody = 'All field are require';
      $('#myModal').modal('show');
    }
  }
}
