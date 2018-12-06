import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShippingCartComponent } from './user-shipping-cart.component';

describe('UserShippingCartComponent', () => {
  let component: UserShippingCartComponent;
  let fixture: ComponentFixture<UserShippingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShippingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShippingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
