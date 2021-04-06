import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.css']
})
export class IngredientsFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { }
  ingredientsForm = this.fb.group({ ingredients: ['', Validators.required] });

  nutrition = [];
  showNutrition = false;
  isLoading = false;




  onSubmit() {
    this.isLoading = true;
    this.showNutrition = false;

    interface ResponseInterface {
      calories: number,
      cautions: [],
      dietLabels: [],
      healthLabels: [],
      ingredients: [],
      totalDaily: {},
      totalNutrients: {},
      totalWeight: number,
      uri: string,
      yield: number
    }


    this.dataService.formValue = this.ingredientsForm.value;
    const ingredients = { ingr: this.ingredientsForm.value.ingredients.trim().replace(/,/g, '\n').split('\n') }

    this.dataService.sendPostRequest(ingredients).subscribe((data: ResponseInterface[]) => {
      console.log(data)
      this.nutrition = data;
      this.showNutrition = true
      this.isLoading = false;
      this.dataService.data = data;
      this.router.navigate(['nutrition/result']);

    })
  }
  ngOnInit(): void {
    this.ingredientsForm.patchValue({ ingredients: this.dataService.formValue['ingredients'] || '' })
  }
}
