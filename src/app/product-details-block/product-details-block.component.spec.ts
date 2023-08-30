import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsBlockComponent } from './product-details-block.component';

describe('ProductDetailsBlockComponent', () => {
  let component: ProductDetailsBlockComponent;
  let fixture: ComponentFixture<ProductDetailsBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsBlockComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
