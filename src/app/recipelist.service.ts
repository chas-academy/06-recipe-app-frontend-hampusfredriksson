import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipelistService {
  private saveRecipe = new BehaviorSubject<any>([]);
  currentRecipe = this.saveRecipe.asObservable();

  constructor() {}
  stackRecipes(recipe: string): void {
    this.saveRecipe.next(this.saveRecipe.getValue().concat([recipe]));
  }
}
