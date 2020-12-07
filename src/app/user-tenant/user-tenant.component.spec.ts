import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTenantComponent } from './user-tenant.component';

describe('UserTenantComponent', () => {
  let component: UserTenantComponent;
  let fixture: ComponentFixture<UserTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
