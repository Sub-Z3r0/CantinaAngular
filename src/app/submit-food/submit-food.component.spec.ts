import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFoodComponent } from './submit-food.component';

describe('SubmitFoodComponent', () => {
  let component: SubmitFoodComponent;
  let fixture: ComponentFixture<SubmitFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
