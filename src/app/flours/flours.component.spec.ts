import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloursComponent } from './flours.component';

describe('FloursComponent', () => {
  let component: FloursComponent;
  let fixture: ComponentFixture<FloursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
