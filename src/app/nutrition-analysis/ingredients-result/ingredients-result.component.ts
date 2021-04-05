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





  ngOnInit(): void {
    this.showNutrition = true;
    this.nutrition = { ingredients: this.dataService['data']['ingredients'] || [] };

    //redirect if no result
    if (!this.nutrition['ingredients'].length) {
      this.router.navigate(['/nutrition']);
    };

    if (this.nutrition['ingredients'].length) {
      if (this.nutrition['ingredients'][0]['parsed'] == undefined) {
        this.showError = true;

      }
    }
  }

}
