import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foods: Food[] = [];
  foodService = inject(FoodService);
  constructor(activateRoute: ActivatedRoute) {
    let foodsObservalbe: Observable<Food[]>;
    activateRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      else foodsObservalbe = this.foodService.getAll();
      foodsObservalbe.subscribe((foods) => {
        this.foods = foods;
      });
    });
  }
}
