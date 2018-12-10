import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMainPageItemsComponent } from './choose-main-page-items.component';

describe('ChooseMainPageItemsComponent', () => {
  let component: ChooseMainPageItemsComponent;
  let fixture: ComponentFixture<ChooseMainPageItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseMainPageItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMainPageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
