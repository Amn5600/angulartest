import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionRoutingModule } from './nutrition-routing.module';

import { NutritionAnalysisComponent } from './nutrition-analysis.component';
import { IngredientsFormComponent } from './ingredients-form/ingredients-form.component';
import { IngredientsResultComponent } from './ingredients-result/ingredients-result.component';





@NgModule({
  declarations: [
    IngredientsFormComponent,
    IngredientsResultComponent,
    NutritionAnalysisComponent
  ],
  imports: [
    CommonModule,
    NutritionRoutingModule
  ],
  exports: [
    IngredientsFormComponent,
    IngredientsResultComponent,
    NutritionAnalysisComponent
  ]
})
export class NutritionAnalysisModule { }
