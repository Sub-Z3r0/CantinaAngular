import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecieloffersComponent } from './add-specieloffers.component';

describe('AddSpecieloffersComponent', () => {
  let component: AddSpecieloffersComponent;
  let fixture: ComponentFixture<AddSpecieloffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpecieloffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpecieloffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
