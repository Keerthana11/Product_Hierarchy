import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElitemodelComponent } from './elitemodel.component';

describe('ElitemodelComponent', () => {
  let component: ElitemodelComponent;
  let fixture: ComponentFixture<ElitemodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElitemodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElitemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
