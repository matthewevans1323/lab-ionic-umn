import { RecipesService } from './recipes.service';
import { Recipe } from './recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipe: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipe = this.recipesService.getAllRecipes();
  }

}
