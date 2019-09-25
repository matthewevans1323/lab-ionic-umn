import { Recipe } from './recipes.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/05/gado-gado-salad.jpg',
      ingredients: [
        'Lontong',
        'Sawi',
        'Bumbu Kecap',
        'Tauge'
      ]
    },
    {
      id: 'r2',
      title: 'Nasi Goreng',
      imageUrl: 'https://www.seriouseats.com/2019/06/20190604-nasi-goreng-fried-rice-vicky-wasik-7-1500x1125.jpg',
      ingredients: [
        'Nasi putih',
        'Kecap manis',
        'Bawang',
        'Telur',
        'Dada ayam'
      ]
    },
    {
      id: 'r3',
      title: 'Cah Brokoli Jamur',
      imageUrl: 'https://chanelmuslim.com/assets/fa862db6/hangatkan-santap-malam-keluarga-dengan-cah-brokoli-jamur-kuping.jpg',
      ingredients: [
        'Jamur',
        'Brokoli',
        'Bawang',
        'Tepung Maizena',
        'Saus Tiram'
      ]
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    }
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }
}
