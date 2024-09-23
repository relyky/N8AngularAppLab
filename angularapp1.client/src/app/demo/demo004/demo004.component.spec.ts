import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo004Component } from './demo004.component';

describe('Demo004Component', () => {
  let component: Demo004Component;
  let fixture: ComponentFixture<Demo004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Demo004Component]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(Demo004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
