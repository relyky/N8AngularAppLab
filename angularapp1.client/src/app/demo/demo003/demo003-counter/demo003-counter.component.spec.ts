import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo003CounterComponent } from './demo003-counter.component';

describe('Demo003CounterComponent', () => {
  let component: Demo003CounterComponent;
  let fixture: ComponentFixture<Demo003CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Demo003CounterComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(Demo003CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
