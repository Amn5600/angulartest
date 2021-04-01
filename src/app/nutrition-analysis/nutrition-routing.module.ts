import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {  AuthGuardService as AuthGuard} from '../shared/auth/auth-guard.service';

// Components
import { IngredientsFormComponent } from './ingredients-form/ingredients-form.component';
import { IngredientsResultComponent } from './ingredients-result/ingredients-result.component';


// Routes
const routes: Routes = [
  { path: '', redirectTo: 'nutrition', pathMatch: 'full'  },
  { path: 'nutrition', component: IngredientsFormComponent, canActivate : [AuthGuard]  },
  { path: 'result', component: IngredientsResultComponent, canActivate : [AuthGuard]   }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class NutritionRoutingModule { }
