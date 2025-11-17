import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevatareaPage } from './nuevatarea.page';

describe('NuevatareaPage', () => {
  let component: NuevatareaPage;
  let fixture: ComponentFixture<NuevatareaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevatareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
