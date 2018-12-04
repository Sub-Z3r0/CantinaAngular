import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMenuesComponent } from './read-menues.component';

describe('ReadMenuesComponent', () => {
  let component: ReadMenuesComponent;
  let fixture: ComponentFixture<ReadMenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
