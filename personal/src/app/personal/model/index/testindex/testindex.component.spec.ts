import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestindexComponent } from './testindex.component';

describe('TestindexComponent', () => {
  let component: TestindexComponent;
  let fixture: ComponentFixture<TestindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
