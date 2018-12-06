import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductConfirmOrderComponent } from './product-confirm-order.component';

describe('ProductConfirmOrderComponent', () => {
  let component: ProductConfirmOrderComponent;
  let fixture: ComponentFixture<ProductConfirmOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductConfirmOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductConfirmOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
