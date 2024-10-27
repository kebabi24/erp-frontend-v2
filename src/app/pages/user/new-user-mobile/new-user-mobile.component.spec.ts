import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserMobileComponent } from './new-user-mobile.component';

describe('NewUserMobileComponent', () => {
  let component: NewUserMobileComponent;
  let fixture: ComponentFixture<NewUserMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewUserMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUserMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
