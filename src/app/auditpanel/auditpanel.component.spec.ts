import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditpanelComponent } from './auditpanel.component';

describe('AuditpanelComponent', () => {
  let component: AuditpanelComponent;
  let fixture: ComponentFixture<AuditpanelComponent>;
   
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditpanelComponent ]
    })
    .compileComponents();
  });
   
  beforeEach(() => {
    fixture = TestBed.createComponent(AuditpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
