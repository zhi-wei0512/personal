import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogldeSearchComponent } from './googlde-search.component';

describe('GoogldeSearchComponent', () => {
  let component: GoogldeSearchComponent;
  let fixture: ComponentFixture<GoogldeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogldeSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogldeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
