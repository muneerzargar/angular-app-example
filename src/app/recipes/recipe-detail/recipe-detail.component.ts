import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/Model/Recipe/Recipe.model';
import { RecipesService } from '../services/recipe-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeSrv: RecipesService) { }

  ngOnInit() {
  }
  onListClick(event: Event) {
    event.preventDefault();
    this.recipeSrv.addIngredientsToShoppingList(this.recipe.ingredients);

  }

}
