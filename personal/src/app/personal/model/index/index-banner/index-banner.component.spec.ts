import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBanner01Component } from './index-banner.component';

describe('IndexBanner01Component', () => {
  let component: IndexBanner01Component;
  let fixture: ComponentFixture<IndexBanner01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexBanner01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBanner01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
