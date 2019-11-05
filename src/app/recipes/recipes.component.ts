import { Component, OnInit } from '@angular/core';
import {RecipesService} from './services/recipe-service.service';
import { Recipe } from '../shared/Model/Recipe/Recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeSrv: RecipesService) { }

  ngOnInit() {
    this.recipeSrv.recipeSelected.subscribe( (recipeItem: Recipe) => this.selectedRecipe = recipeItem );
  }

}
