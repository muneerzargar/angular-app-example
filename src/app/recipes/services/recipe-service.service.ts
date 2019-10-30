import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/shared/Model/Recipe/Recipe.model';
import { Ingredient } from 'src/app/shared/Model/Ingredient/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shoppingList/shoppingList.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipeList: Recipe[] = [
    {name: 'Recipe1', description: 'Description1', imagePath: 'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg',
    ingredients: [{name: 'cherry', amount: 5}, {name: 'oranges', amount: 1}]
    },
    {name: 'Recipe2', description: 'Description2', imagePath: 'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg',
    ingredients: [{name: 'cherry', amount: 5}, {name: 'olive', amount: 6}]
    },
    {name: 'Recipe3', description: 'Description3', imagePath: 'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg',
    ingredients: [{name: 'cherry', amount: 5}, {name: 'Eggs', amount: 3}]
    },
    {name: 'Recipe4', description: 'Description4', imagePath: 'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg',
    ingredients: [{name: 'cherry', amount: 5}, {name: 'Pineapple', amount: 4}]
    },
    {name: 'Recipe5', description: 'Description5', imagePath: 'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg',
    ingredients: [{name: 'cherry', amount: 5}, {name: 'lichi', amount: 9}]
    }
  ];

  getRecipes() {
    const newRecipes = [...this.recipeList];
    return newRecipes;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListSrv.addIngredientList(ingredients);
  }

  constructor(private shoppingListSrv: ShoppingListService) { }
}
