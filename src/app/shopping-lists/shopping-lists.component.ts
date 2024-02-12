import { Component } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrl: './shopping-lists.component.css'
})
export class ShoppingListsComponent {
  ingredients : Ingredient [] =[
    new Ingredient('apples', 6),
    new Ingredient('pears',7)
  ];
}
