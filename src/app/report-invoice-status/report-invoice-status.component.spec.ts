import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInvoiceStatusComponent } from './report-invoice-status.component';

describe('ReportInvoiceStatusComponent', () => {
  let component: ReportInvoiceStatusComponent;
  let fixture: ComponentFixture<ReportInvoiceStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportInvoiceStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInvoiceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
