import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMailboxDetailComponent } from './user-mailbox-detail.component';

describe('UserMailboxDetailComponent', () => {
  let component: UserMailboxDetailComponent;
  let fixture: ComponentFixture<UserMailboxDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMailboxDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMailboxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
