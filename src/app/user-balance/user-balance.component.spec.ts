import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UuserBalanceComponent } from './user-balance.component';

describe('UuserBalanceComponent', () => {
  let component: UuserBalanceComponent;
  let fixture: ComponentFixture<UuserBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UuserBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UuserBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
