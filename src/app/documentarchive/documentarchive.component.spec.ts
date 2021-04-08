import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentarchiveComponent } from './documentarchive.component';

describe('DocumentarchiveComponent', () => {
  let component: DocumentarchiveComponent;
  let fixture: ComponentFixture<DocumentarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentarchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
