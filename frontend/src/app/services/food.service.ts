import { Injectable, inject } from '@angular/core';
import { Food } from '../shared/models/Food';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_SEARCH_URL, FOODS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  http = inject(HttpClient);
  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }
  getAllFoodsBySearchTerm(searchTerm: string): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }
}
