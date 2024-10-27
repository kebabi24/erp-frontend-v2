import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProductPagesComponent } from './set-product-pages.component';

describe('SetProductPagesComponent', () => {
  let component: SetProductPagesComponent;
  let fixture: ComponentFixture<SetProductPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetProductPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetProductPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
