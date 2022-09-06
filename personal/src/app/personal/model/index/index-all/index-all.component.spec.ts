import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAllComponent } from './index-all.component';

describe('IndexAllComponent', () => {
  let component: IndexAllComponent;
  let fixture: ComponentFixture<IndexAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
