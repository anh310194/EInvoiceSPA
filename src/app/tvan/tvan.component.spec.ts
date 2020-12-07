import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvanComponent } from './tvan.component';

describe('TvanComponent', () => {
  let component: TvanComponent;
  let fixture: ComponentFixture<TvanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
