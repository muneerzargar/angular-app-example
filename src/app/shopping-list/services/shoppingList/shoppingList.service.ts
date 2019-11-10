// import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/Model/Ingredient/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    onIngredientAdded = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [{name: 'Apples', amount: 5}, {name: 'Oranges', amount: 2}];
    constructor() {}

    getIngredients() {
        const ingredientList = [...this.ingredients];
        return ingredientList;
    }

    onAddIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        const newIngredientList = this.getIngredients();
        this.onIngredientAdded.next(newIngredientList);

    }
    addIngredientList(ingredients: Ingredient[]) {
        ingredients.forEach(element => {
            if (!this.ingredients.includes(element)) {
                this.ingredients.push(element);
            }
        });
        const newIngredientList = this.getIngredients();
        this.onIngredientAdded.next(newIngredientList);
    }
}
