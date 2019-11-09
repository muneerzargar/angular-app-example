import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Recipe} from '../../shared/Model/Recipe/Recipe.model';
import {RecipesService} from '../services/recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[];

  constructor(private recipes: RecipesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeList = this.recipes.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
