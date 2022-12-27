import { RefObject, useEffect, useState } from 'react';
import { NutritionType } from '../models/enums/NutritionType';
import { RecipeOverview } from '../models/Recipe';
import { useInfiniteScroll } from './useInfiniteScroll';

const recipes: RecipeOverview[] = Array.from({ length: 200 })
  .fill(undefined)
  .map((_, index) => ({
    cookingTime: 23,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp',
    id: index.toString(),
    imageUrl: `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    likes: 300,
    nutritionType: NutritionType.VEGETARIAN,
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
    nutrition: 200,
  }));

const numberOfRecipesPerPage = 20;

export const useFetchRecipeOverviews = (targetElementRef: RefObject<HTMLDivElement>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentRecipes, setCurrentRecipes] = useState<RecipeOverview[]>(
    recipes.slice(currentIndex * 10, (currentIndex + 1) * 10),
  );

  // TODO FETCH ACTUAL DATA

  const handleInfiniteScroll = () => {
    if (!isLoading) {
      setCurrentIndex((p) => p + 1);
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setCurrentRecipes((p) => [
        ...p,
        ...recipes.slice(currentIndex * numberOfRecipesPerPage, (currentIndex + 1) * numberOfRecipesPerPage),
      ]);
      setIsLoading(false);
    }, 2000);
  }, [currentIndex]);

  useInfiniteScroll(targetElementRef, handleInfiniteScroll);

  return currentRecipes;
};
