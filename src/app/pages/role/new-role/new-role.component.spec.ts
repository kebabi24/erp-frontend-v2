import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoleComponent } from './new-role.component';

describe('NewRoleComponent', () => {
  let component: NewRoleComponent;
  let fixture: ComponentFixture<NewRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
