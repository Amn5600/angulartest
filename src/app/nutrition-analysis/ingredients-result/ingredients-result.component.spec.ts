import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsResultComponent } from './ingredients-result.component';

describe('IngredientsResultComponent', () => {
  let component: IngredientsResultComponent;
  let fixture: ComponentFixture<IngredientsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
