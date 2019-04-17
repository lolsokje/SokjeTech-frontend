import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUniversesComponent } from './my-universes.component';

describe('MyUniversesComponent', () => {
  let component: MyUniversesComponent;
  let fixture: ComponentFixture<MyUniversesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUniversesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUniversesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
