import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCustomComponent } from './index-custom.component';

describe('IndexCustomComponent', () => {
  let component: IndexCustomComponent;
  let fixture: ComponentFixture<IndexCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
