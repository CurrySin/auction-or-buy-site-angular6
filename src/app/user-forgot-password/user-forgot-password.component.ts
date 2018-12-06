import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from './../service/user.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-user-forgot-password',
  templateUrl: './user-forgot-password.component.html',
  styleUrls: ['./user-forgot-password.component.css']
})
export class UserForgotPasswordComponent implements OnInit {
  dialogTitle: string;
  dialogBody: string;
  username: string;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.username) {
      this.spinnerService.show();
      this.userService.forgotPassword(this.username)
            .pipe(first())
            .subscribe(
                data => {
                    // router to home page
                    this.spinnerService.hide();
                    localStorage.setItem('username', data.username);
              this.router.navigate(['/user/verify']);
                },
                err => {
                  this.spinnerService.hide();
                  this.dialogTitle = 'Forgot Password Failed';
                  this.dialogBody = 'Please try angin';
                  $('#myModal').modal('show');
                });
    } else {
      this.dialogTitle = 'Input messing';
      this.dialogBody = 'Please input username';
      $('#myModal').modal('show');
    }
  }
}
