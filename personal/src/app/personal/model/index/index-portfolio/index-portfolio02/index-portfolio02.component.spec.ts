import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPortfolio02Component } from './index-portfolio02.component';

describe('IndexPortfolio02Component', () => {
  let component: IndexPortfolio02Component;
  let fixture: ComponentFixture<IndexPortfolio02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPortfolio02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPortfolio02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
