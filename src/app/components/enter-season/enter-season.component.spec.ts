import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterSeasonComponent } from './enter-season.component';

describe('EnterSeasonComponent', () => {
  let component: EnterSeasonComponent;
  let fixture: ComponentFixture<EnterSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
