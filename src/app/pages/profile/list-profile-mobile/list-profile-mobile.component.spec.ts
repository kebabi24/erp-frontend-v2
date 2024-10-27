import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfileMobileComponent } from './list-profile-mobile.component';

describe('ListProfileMobileComponent', () => {
  let component: ListProfileMobileComponent;
  let fixture: ComponentFixture<ListProfileMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProfileMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProfileMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
