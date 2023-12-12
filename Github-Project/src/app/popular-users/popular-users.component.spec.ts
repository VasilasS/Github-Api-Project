import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularUsersComponent } from './popular-users.component';

describe('PopularUsersComponent', () => {
  let component: PopularUsersComponent;
  let fixture: ComponentFixture<PopularUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularUsersComponent]
    });
    fixture = TestBed.createComponent(PopularUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
