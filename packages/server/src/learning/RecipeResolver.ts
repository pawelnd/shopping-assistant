import {
  Arg,
  Args,
  ArgsType,
  Authorized,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { ArrayMaxSize, Length, Max, MaxLength, Min } from 'class-validator';
import User from '../common/interfaces/user.interface';
import { Recipe } from './Recipe';
import { RecipeService } from './RecipeService';
import { injectable } from 'tsyringe';

@InputType()
class NewRecipeInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @Length(30, 255)
  description?: string;

  @Field((type) => [String])
  @ArrayMaxSize(30)
  ingredients: string[];
}

@ArgsType()
class RecipesArgs {
  @Field((type) => Int)
  @Min(0)
  skip = 0;

  @Field((type) => Int)
  @Min(1)
  @Max(50)
  take = 25;
}

class RecipeNotFoundError extends Error {}

@Resolver(Recipe)
@injectable()
export class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @Query((returns) => Recipe)
  async recipe(@Arg('id') id: string) {
    const recipe = await this.recipeService.findById(id);
    if (recipe === undefined) {
      throw new RecipeNotFoundError(id);
    }
    return recipe;
  }

  @Query((returns) => [Recipe])
  recipes(@Args() { skip, take }: RecipesArgs) {
    return this.recipeService.findAll();
  }

  @Mutation((returns) => Recipe)
  @Authorized()
  addRecipe(
    @Arg('newRecipeData') newRecipeData: NewRecipeInput,
    @Ctx('user') user: User,
  ): Promise<Recipe> {
    return this.recipeService.create({
      title: newRecipeData.title,
      ingredients: newRecipeData.ingredients,
      creationDate: new Date(),
    });
  }

  @Mutation((returns) => Boolean)
  @Authorized('ADMIN')
  async removeRecipe(@Arg('id') id: string) {
    try {
      await this.recipeService.removeAll();
      return true;
    } catch {
      return false;
    }
  }
}
