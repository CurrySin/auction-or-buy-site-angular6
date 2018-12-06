import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMailboxComponent } from './user-mailbox.component';

describe('UserMailboxComponent', () => {
  let component: UserMailboxComponent;
  let fixture: ComponentFixture<UserMailboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMailboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
