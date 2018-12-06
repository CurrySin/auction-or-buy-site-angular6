import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPasswordRenewComponent } from './user-password-renew.component';

describe('UserPasswordRenewComponent', () => {
  let component: UserPasswordRenewComponent;
  let fixture: ComponentFixture<UserPasswordRenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPasswordRenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPasswordRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
