import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from './../service/user.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-user-mailbox-detail',
  templateUrl: './user-mailbox-detail.component.html',
  styleUrls: ['./user-mailbox-detail.component.css']
})
export class UserMailboxDetailComponent implements OnInit {
  dialogTitle: string;
  dialogBody: string;
  accessToken: string;
  mail_id: string;
  mail: any = {
    _id: '',
    sender: '',
    receiver: '',
    date: '',
    subject: '',
    content: '',
    enroll: '',
    status: '',
    active: true
  };
  isError: Boolean = false;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const local_accessToken = localStorage.getItem('accessToken');
    const local_mail_id = localStorage.getItem('mail_id');
    if (local_accessToken && local_mail_id ) {
      this.accessToken = local_accessToken;
      this.mail_id = local_mail_id;
      this.userService.getMailById(this.mail_id, this.accessToken)
            .pipe(first())
            .subscribe(
                data => {
                    // router to home page
                    this.spinnerService.hide();
                    this.mail = data;
                    this.mail.date = new Date(this.mail.date);
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
    }
  }

  onCloseClikced() {
    this.router.navigate(['/login']);
  }

}
