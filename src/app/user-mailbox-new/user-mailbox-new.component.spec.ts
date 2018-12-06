import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMailboxNewComponent } from './user-mailbox-new.component';

describe('UserMailboxNewComponent', () => {
  let component: UserMailboxNewComponent;
  let fixture: ComponentFixture<UserMailboxNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMailboxNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMailboxNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
