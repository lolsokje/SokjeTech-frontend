import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDriverComponent } from './create-driver.component';

describe('CreateDriverComponent', () => {
  let component: CreateDriverComponent;
  let fixture: ComponentFixture<CreateDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
