import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 



 
// Routes
const routes: Routes = [
  {
    path: 'nutrition',
    loadChildren: () => import('./nutrition-analysis/nutrition-analysis.module').then(m => m.NutritionAnalysisModule)
  },
  {
    path: '',
    redirectTo: 'nutrition/analyse',
    pathMatch: 'full'
  } ,
  {
    path: '**',
    redirectTo: 'nutrition/analyse',
   }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
