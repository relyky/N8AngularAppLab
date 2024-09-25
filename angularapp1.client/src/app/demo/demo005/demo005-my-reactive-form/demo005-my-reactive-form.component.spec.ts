import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo005MyReactiveFormComponent } from './demo005-my-reactive-form.component';

describe('Demo005MyReactiveFormComponent', () => {
  let component: Demo005MyReactiveFormComponent;
  let fixture: ComponentFixture<Demo005MyReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Demo005MyReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Demo005MyReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
