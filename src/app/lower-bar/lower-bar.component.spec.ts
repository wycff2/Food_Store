import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerBarComponent } from './lower-bar.component';

describe('LowerBarComponent', () => {
  let component: LowerBarComponent;
  let fixture: ComponentFixture<LowerBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
