import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistwrapperComponent } from './userlistwrapper.component';

describe('UserlistwrapperComponent', () => {
  let component: UserlistwrapperComponent;
  let fixture: ComponentFixture<UserlistwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserlistwrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlistwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
