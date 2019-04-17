import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUniverseComponent } from './edit-universe.component';

describe('EditUniverseComponent', () => {
  let component: EditUniverseComponent;
  let fixture: ComponentFixture<EditUniverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUniverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
