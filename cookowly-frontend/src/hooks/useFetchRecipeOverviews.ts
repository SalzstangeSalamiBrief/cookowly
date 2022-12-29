import { RefObject, useEffect, useState } from 'react';
import { NutritionType } from '../models/enums/NutritionType';
import { RecipeOverview } from '../models/Recipe';
import { useInfiniteScroll } from './useInfiniteScroll';

const dummyImages = [
  `https://images.unsplash.com/photo-1567529854338-fc097b962123?ixlib=rb-4.0.3
        &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
  `https://images.unsplash.com/photo-1668665771757-4d42737d295a?ixlib=rb-4.0.3
  &ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Q2hpcG90bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
  `https://images.unsplash.com/photo-1625940629601-8f2570086b06?ixlib=rb-4.0.3
  &ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2FyYWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
  `https://images.unsplash.com/photo-1657299156638-ffa9dac845b4?ixlib=rb-4.0.3
  &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
];

// TODO REMOVE LATER AFTER FETCHING ACTUAL DATA
const dummyRecipes: RecipeOverview[] = Array.from({ length: 200 })
  .fill(undefined)
  .map((_, index) => ({
    cookingTime: 23,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia imp
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia im
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia im
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia im
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia im
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor architecto mollitia im`,
    id: index.toString(),
    imageUrl: dummyImages[Math.floor(Math.random() * dummyImages.length)],
    likes: 300,
    nutritionType: NutritionType.VEGETARIAN,
    title: 'Creamy Coconut Rice with Spiced Chickpeas',
    nutrition: 200,
  }));

const numberOfRecipesPerPage = 20;
// TODO REMOVE LATER AFTER FETCHING ACTUAL DATA
const getRecipesRange = (currentIndex: number) =>
  dummyRecipes.slice(currentIndex * numberOfRecipesPerPage, (currentIndex + 1) * numberOfRecipesPerPage);

interface IUseFetchRecipeOverviewsReturnValues {
  /**
   * a number of recipe overviews
   */
  recipes: RecipeOverview[];
  /**
   * indicates if data is currently loaded or not
   */
  isLoading: boolean;
  /**
   * the error of a fetch request that tried to load more data
   */
  error: any;
}

/**
 * This hook is used to fetch recipe overviews
 *
 * @param targetElementRef the ref of a html element
 * @returns recipes and information about the state of this hook
 */
export const useFetchRecipeOverviews = (
  targetElementRef: RefObject<HTMLElement>,
): IUseFetchRecipeOverviewsReturnValues => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [recipes, setRecipes] = useState<RecipeOverview[]>([]);

  /**
   * executes if the current index changes
   * If more elements are available and currently no elements are loaded,
   *  then additional data gets fetched
   */
  useEffect(() => {
    // TODO: SINCE REACT 18 USE EFFECT GETS EXECUTED TWICE => THIS LEADS TO ERRORS IN DEVELOPMENT
    // TODO   => CHECK FOR PRODUCTION
    const hasMore = currentIndex <= Math.floor(dummyRecipes.length / numberOfRecipesPerPage);
    if (isLoading && !hasMore) {
      return;
    }

    setIsLoading(true);
    setError(undefined);
    try {
      // TODO FETCH ACTUAL DATA
      new Promise((resolve) => {
        setTimeout(() => {
          const recipesToAdd = getRecipesRange(currentIndex);
          resolve(recipesToAdd);
        }, 2000);
      }).then((data) => {
        setRecipes((p) => [...p, ...(data as RecipeOverview[])]);
        setIsLoading(false);
      });
    } catch (failedRequestError) {
      setError(failedRequestError);
    }
  }, [currentIndex]);

  /**
   * handles a scroll event by incrementing the current index
   */
  const handleInfiniteScroll = () => {
    if (!isLoading) {
      setCurrentIndex((p) => p + 1);
    }
  };

  useInfiniteScroll(targetElementRef, handleInfiniteScroll);

  return { recipes, isLoading, error };
};
