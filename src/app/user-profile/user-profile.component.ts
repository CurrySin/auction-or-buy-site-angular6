import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { first } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username: string;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const local_username = localStorage.getItem('username');
    if (local_username) {
      this.username = local_username;
    }
  }

  onLogout() {
    this.spinnerService.show();
    this.userService.logout().then(res => {
      this.spinnerService.hide();
      this.router.navigate(['/']);
    });
  }

}
