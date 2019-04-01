import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipelistService {
  private saveRecipe = new BehaviorSubject<any>([]);
  currentRecipe = this.saveRecipe.asObservable();

  constructor() {}
  savedRecipes(label: string, image: string, calories: string): void {
    this.saveRecipe.next(
      this.saveRecipe.getValue().concat([label, image, calories])
    );
  }
}
