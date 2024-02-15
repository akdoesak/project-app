import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[]=[
    new Recipe('Test recipe', 'description',
      'https://cdn.pixabay.com/photo/2023/12/13/17/54/bun-8447394_1280.jpg'),
    new Recipe('Test recipe', 'description',
      'https://cdn.pixabay.com/photo/2023/12/13/17/54/bun-8447394_1280.jpg'),
    new Recipe('Test recipe', 'description',
      'https://cdn.pixabay.com/photo/2023/12/13/17/54/bun-8447394_1280.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipeElement: Recipe){
    this.recipeWasSelected.emit(recipeElement)
  }

}
