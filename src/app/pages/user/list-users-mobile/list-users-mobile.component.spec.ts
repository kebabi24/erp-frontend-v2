import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersMobileComponent } from './list-users-mobile.component';

describe('ListUsersMobileComponent', () => {
  let component: ListUsersMobileComponent;
  let fixture: ComponentFixture<ListUsersMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListUsersMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUsersMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
