import { TestBed } from '@angular/core/testing';
import { AuditarchiveService } from './auditarchive.service';

describe('AuditarchiveService', () => {
  let service: AuditarchiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditarchiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
