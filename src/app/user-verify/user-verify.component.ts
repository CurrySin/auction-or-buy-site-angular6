import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from './../service/user.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-user-verify',
  templateUrl: './user-verify.component.html',
  styleUrls: ['./user-verify.component.css']
})
export class UserVerifyComponent implements OnInit {
  dialogTitle: string;
  dialogBody: string;
  username: string;
  verification_code: string;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const local_username = localStorage.getItem('username');
    if (local_username) {
      this.username = local_username;
      localStorage.removeItem('username');
    }
  }

  onSubmit() {
    if (this.username && this.verification_code) {
      this.spinnerService.show();
      this.userService.verify(this.username, this.verification_code)
            .pipe(first())
            .subscribe(
                data => {
                    // router to home page
                    this.spinnerService.hide();
                    this.router.navigate(['/login']);
                },
                err => {
                  this.spinnerService.hide();
                  this.dialogTitle = 'Verify Failed';
                  this.dialogBody = 'Please try angin';
                  $('#myModal').modal('show');
                });
    } else {
      this.dialogTitle = 'Input messing';
      this.dialogBody = 'Please input username and verification code';
      $('#myModal').modal('show');
    }
  }
}
