import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from './../service/user.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-user-password-renew',
  templateUrl: './user-password-renew.component.html',
  styleUrls: ['./user-password-renew.component.css']
})
export class UserPasswordRenewComponent implements OnInit {
  username: string;
  verificationCode: string;
  newPassword: string;
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
    if (this.username && this.verificationCode && this.newPassword ) {
      this.spinnerService.show();
      this.userService.renewPassword(this.username, this.verificationCode, this.newPassword)
            .pipe(first())
            .subscribe(
                data => {
                    // router to home page
                    this.spinnerService.hide();
                    this.router.navigate(['/login']);
                },
                err => {
                  this.spinnerService.hide();
                  this.dialogTitle = 'Password renew Failed';
                  this.dialogBody = 'Please try angin';
                  $('#myModal').modal('show');
                });
    } else {
      this.dialogTitle = 'Input messing';
      this.dialogBody = 'Please input username, verification code, new password';
      $('#myModal').modal('show');
    }
  }

}
