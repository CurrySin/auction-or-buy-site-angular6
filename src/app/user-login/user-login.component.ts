import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from './../service/user.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  username: string;
  password: string;
  dialogTitle: string;
  dialogBody: string;
  isError: Boolean = false;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const assessToken = localStorage.getItem('accessToken');
    if (assessToken) {
      this.router.navigate(['/user/profile']);
    }
  }

  onSubmit() {
    if (this.username && this.password) {
      this.spinnerService.show();
      this.userService.login(this.username, this.password)
            .pipe(first())
            .subscribe(
                data => {
                    // router to home page
                    this.spinnerService.hide();
                    localStorage.setItem('username', this.username);
                    this.router.navigate(['/']);
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
      this.dialogBody = 'Please input username or password';
      $('#myModal').modal('show');
    }
  }

}
