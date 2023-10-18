import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresFormComponent } from './profesores-form.component';

describe('ProfesoresFormComponent', () => {
  let component: ProfesoresFormComponent;
  let fixture: ComponentFixture<ProfesoresFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesoresFormComponent]
    });
    fixture = TestBed.createComponent(ProfesoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
