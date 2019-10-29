import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../shared/Model/Recipe/Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[] = [
    {name: 'Recipe1', description: 'Description1', imagePath: 'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg'},
    {name: 'Recipe2', description: 'Description2', imagePath: 'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg'},
    {name: 'Recipe3', description: 'Description3', imagePath: 'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg'},
    {name: 'Recipe4', description: 'Description4', imagePath: 'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg'},
    {name: 'Recipe5', description: 'Description5', imagePath: 'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
