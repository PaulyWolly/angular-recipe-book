import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', '../../../../assets/img/recipe-1.png' ),
    new Recipe('A test Recipe', 'This is simply a test', '../../../../assets/img/recipe-1.png' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
