import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[]=[
    new Recipe('Test recipe', 'description',
      'https://cdn.pixabay.com/photo/2023/12/13/17/54/bun-8447394_1280.jpg'),
    new Recipe('Test recipe', 'description',
      'https://cdn.pixabay.com/photo/2023/12/13/17/54/bun-8447394_1280.jpg'),
    new Recipe('Test recipe', 'description',
      'https://cdn.pixabay.com/photo/2023/12/13/17/54/bun-8447394_1280.jpg')
  ];


  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
