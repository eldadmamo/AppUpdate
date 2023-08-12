import {Component, OnInit} from '@angular/core';

import {Recipe} from "../recipes.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements  OnInit{

  recipes: Recipe[] = [ ];
  constructor() {
  }

  ngOnInit() {

    const recipe2 = new Recipe("spaggati", "one of the most Worderful Food Ever", "https://i2.wp.com/hipfoodiemom.com/wp-content/uploads/2020/04/IMG_9525-2.jpg");
    const recipe1 = new Recipe("spaggati", "one of the most Worderful Food Ever", "https://i2.wp.com/hipfoodiemom.com/wp-content/uploads/2020/04/IMG_9525-2.jpg");
    this.recipes.push(recipe1);
    this.recipes.push(recipe2)
  }
}
