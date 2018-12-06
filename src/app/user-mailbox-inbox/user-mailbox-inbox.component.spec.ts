import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMailboxInboxComponent } from './user-mailbox-inbox.component';

describe('UserMailboxInboxComponent', () => {
  let component: UserMailboxInboxComponent;
  let fixture: ComponentFixture<UserMailboxInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMailboxInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMailboxInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
