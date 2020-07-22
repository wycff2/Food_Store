import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { itemdetailcomponent } from './itemdetail.component';

describe('ItemdetailComponent', () => {
  let component: itemdetailcomponent;
  let fixture: ComponentFixture<itemdetailcomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ itemdetailcomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(itemdetailcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
