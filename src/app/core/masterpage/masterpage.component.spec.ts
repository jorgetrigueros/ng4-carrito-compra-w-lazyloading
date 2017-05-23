import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpageComponent } from './masterpage.component';

describe('MasterpageComponent', () => {
  let component: MasterpageComponent;
  let fixture: ComponentFixture<MasterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
