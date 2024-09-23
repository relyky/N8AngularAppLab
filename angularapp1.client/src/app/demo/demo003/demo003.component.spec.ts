import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo003Component } from './demo003.component';

describe('Demo003Component', () => {
  let component: Demo003Component;
  let fixture: ComponentFixture<Demo003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Demo003Component]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(Demo003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
