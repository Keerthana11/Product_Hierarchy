import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectremodelComponent } from './spectremodel.component';

describe('SpectremodelComponent', () => {
  let component: SpectremodelComponent;
  let fixture: ComponentFixture<SpectremodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpectremodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectremodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
