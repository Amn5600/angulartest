// Modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NutritionAnalysisModule } from './nutrition-analysis/nutrition-analysis.module';
// Components
import { AppComponent } from './app.component';
 

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  //  AppRoutingModule,
    NutritionAnalysisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
