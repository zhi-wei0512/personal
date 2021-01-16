import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPortfolio01Component } from './index-portfolio01.component';

describe('IndexPortfolio01Component', () => {
  let component: IndexPortfolio01Component;
  let fixture: ComponentFixture<IndexPortfolio01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPortfolio01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPortfolio01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
