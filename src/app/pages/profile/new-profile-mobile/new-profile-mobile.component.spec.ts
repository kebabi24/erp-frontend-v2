import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfileMobileComponent } from './new-profile-mobile.component';

describe('NewProfileMobileComponent', () => {
  let component: NewProfileMobileComponent;
  let fixture: ComponentFixture<NewProfileMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewProfileMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProfileMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
