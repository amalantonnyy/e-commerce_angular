import { ComponentFixture, TestBed } from '@angular/core/testing';

import { product } from './product';

describe('Product', () => {
  let component: product;
  let fixture: ComponentFixture<product>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [product],
    }).compileComponents();

    fixture = TestBed.createComponent(product);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
