import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../shared/services/data.service';



@Component({
  selector: 'app-ingredients-result',
  templateUrl: './ingredients-result.component.html',
  styleUrls: ['./ingredients-result.component.css']
})
export class IngredientsResultComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) { }

  nutrition = {};
  showNutrition = false;
  showError = false;
  isDetailTableVisible = false


  showDetailTable() {
    this.isDetailTableVisible = true
  }

  ngOnInit(): void {
    this.showNutrition = true;
    this.nutrition = {
      ingredients: this.dataService['data']['ingredients'] || [],
      calories: this.dataService['data']['calories'] || 0,
      totalNutrients: this.dataService['data']['totalNutrients'] || {},
    };

    //redirect if no result
    if (!this.nutrition['ingredients'].length) {
      this.router.navigate(['/nutrition/analyse']);
    };

    if (this.nutrition['ingredients'].length) {
      if (this.nutrition['ingredients'][0]['parsed'] == undefined) {
        this.showError = true;
      }
    }
  }

}
