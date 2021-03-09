import { injectable } from 'tsyringe';
import BaseRepository from '../repository/base/BaseRepository';
import { Recipe } from './Recipe';

@injectable()
export class RecipeService extends BaseRepository<Recipe> {
  constructor() {
    super('Recipe', new Recipe());
  }
}
