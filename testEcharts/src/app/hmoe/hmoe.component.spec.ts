import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmoeComponent } from './hmoe.component';

describe('HmoeComponent', () => {
  let component: HmoeComponent;
  let fixture: ComponentFixture<HmoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
