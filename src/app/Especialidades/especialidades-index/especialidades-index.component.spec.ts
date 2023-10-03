import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesIndexComponent } from './especialidades-index.component';

describe('EspecialidadesIndexComponent', () => {
  let component: EspecialidadesIndexComponent;
  let fixture: ComponentFixture<EspecialidadesIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadesIndexComponent]
    });
    fixture = TestBed.createComponent(EspecialidadesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
