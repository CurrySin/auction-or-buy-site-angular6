import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMailboxOutboxComponent } from './user-mailbox-outbox.component';

describe('UserMailboxOutboxComponent', () => {
  let component: UserMailboxOutboxComponent;
  let fixture: ComponentFixture<UserMailboxOutboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMailboxOutboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMailboxOutboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
