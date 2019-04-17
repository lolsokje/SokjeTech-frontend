import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUniverseComponent } from './create-universe.component';

describe('CreateUniverseComponent', () => {
  let component: CreateUniverseComponent;
  let fixture: ComponentFixture<CreateUniverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUniverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
