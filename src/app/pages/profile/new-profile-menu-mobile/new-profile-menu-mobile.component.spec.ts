import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfileMenuMobileComponent } from './new-profile-menu-mobile.component';

describe('NewProfileMenuMobileComponent', () => {
  let component: NewProfileMenuMobileComponent;
  let fixture: ComponentFixture<NewProfileMenuMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewProfileMenuMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProfileMenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
