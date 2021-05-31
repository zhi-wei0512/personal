import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlopGameComponent } from './flop-game.component';

describe('FlopGameComponent', () => {
  let component: FlopGameComponent;
  let fixture: ComponentFixture<FlopGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlopGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlopGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
