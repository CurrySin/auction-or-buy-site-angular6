import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-mailbox-outbox',
  templateUrl: './user-mailbox-outbox.component.html',
  styleUrls: ['./user-mailbox-outbox.component.css']
})
export class UserMailboxOutboxComponent implements OnInit {
  users= [
    {
      number:'1',
      name : 'Peter',
      subject :'Hello',
      handle:'@gamil',  
    },
    {
      number:'2',
      name : 'Sam',
      subject :'Hi',
      handle:'@yahoo',  
    },
    {
      number:'3',
      name : 'Curry',
      subject :'OK',
      handle:'@msn',  
    },
  ]
    ;
  constructor() { }

  ngOnInit() {
  }

}
