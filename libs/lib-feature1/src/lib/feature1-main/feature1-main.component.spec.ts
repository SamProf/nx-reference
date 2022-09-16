import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1MainComponent } from './feature1-main.component';

describe('Feature1MainComponent', () => {
  let component: Feature1MainComponent;
  let fixture: ComponentFixture<Feature1MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Feature1MainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Feature1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
