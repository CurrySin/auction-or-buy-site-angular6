import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from './../service/user.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-user-mailbox-inbox',
  templateUrl: './user-mailbox-inbox.component.html',
  styleUrls: ['./user-mailbox-inbox.component.css']
})
export class UserMailboxInboxComponent implements OnInit {
  inbox: Array<any> = [];
  username: string;
  accessToken: string;
  dialogTitle: string;
  dialogBody: string;
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
      this.userService.receiveMail(this.username, this.accessToken)
            .pipe(first())
            .subscribe(
                data => {
                    // router to home page
                    this.spinnerService.hide();
                    this.inbox = data;
                },
                err => {
                  this.spinnerService.hide();
                  this.dialogTitle = 'Login Failed';
                  this.dialogBody = 'Please try angin';
                  $('#myModal').modal('show');
                });
    }
  }

  onClicked(mail) {
    console.log(mail);
  }

}
