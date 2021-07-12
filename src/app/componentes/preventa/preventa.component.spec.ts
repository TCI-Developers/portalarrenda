import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventaComponent } from './preventa.component';

describe('PreventaComponent', () => {
  let component: PreventaComponent;
  let fixture: ComponentFixture<PreventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
