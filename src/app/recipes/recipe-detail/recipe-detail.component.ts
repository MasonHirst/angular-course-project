import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() currentRecipe: Recipe = null;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddRecipeIngredients() {
    this.shoppingListService.addRecipeIngredients(this.currentRecipe.ingredients)
  }
}
