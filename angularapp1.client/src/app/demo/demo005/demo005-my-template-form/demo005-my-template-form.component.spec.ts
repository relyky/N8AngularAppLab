import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo005MyTemplateFormComponent } from './demo005-my-template-form.component';

describe('Demo005MyTemplateFormComponent', () => {
  let component: Demo005MyTemplateFormComponent;
  let fixture: ComponentFixture<Demo005MyTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Demo005MyTemplateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Demo005MyTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
