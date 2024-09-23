import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo005Component } from './demo005.component';

describe('Demo005Component', () => {
  let component: Demo005Component;
  let fixture: ComponentFixture<Demo005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demo005Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Demo005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
