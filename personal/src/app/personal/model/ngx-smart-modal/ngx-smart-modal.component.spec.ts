import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartModalComponent } from './ngx-smart-modal.component';

describe('NgxSmartModalComponent', () => {
  let component: NgxSmartModalComponent;
  let fixture: ComponentFixture<NgxSmartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSmartModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
