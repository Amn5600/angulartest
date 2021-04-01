import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-ingredients-result',
  templateUrl: './ingredients-result.component.html',
  styleUrls: ['./ingredients-result.component.css']
})
export class IngredientsResultComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) { }

  nutrition = [];
  showNutrition = false;



  ngOnInit(): void {
    this.showNutrition = true;
    this.nutrition = this.dataService['data'];
    //redirect if no result
    if (!this.nutrition['ingredients']) {
      this.router.navigate(['/home'])
    };
  }

}
