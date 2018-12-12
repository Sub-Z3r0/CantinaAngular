import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMotdComponent } from './add-motd.component';

describe('AddMotdComponent', () => {
  let component: AddMotdComponent;
  let fixture: ComponentFixture<AddMotdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMotdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMotdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
