import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRef } from 'react';
import { RecipeOverviewCard } from '../../components/card/wrapper/RecipeOverviewCard';
import { LoadingSpinner } from '../../components/loading-spinner/LoadingSpinner';
import { getRecipesRange, useFetchRecipeOverviews } from '../../hooks/useFetchRecipeOverviews';
import { RecipeOverview } from '../../models/Recipe';

import styles from './index.module.css';
/**
 * TODO
 *  0. get Site props => Fetch initital data, set initial recipes in useFetchRecipeOverviews
 *  and dont execute use effect if index === 0
 *  1. Error State
 *  2. Get data from Backend
 */

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  res.setHeader('Cache-Control', 'public, s-maxage=6000, stale-while-revalidate=12000');
  // TODO FETCH ACTUAL DATA => SAME AS USE_FETCH_RECIPE_OVERVIEWS
  const initialRecipes = await new Promise((resolve) => {
    setTimeout(() => {
      const recipesToAdd = getRecipesRange(0);
      resolve(recipesToAdd);
    }, 2000);
  });

  return {
    props: { initialRecipes },
  };
}

export default function Recipes({ initialRecipes }: { initialRecipes: RecipeOverview[] }) {
  const infiniteScrollTriggerElement = useRef<HTMLLIElement>(null);
  const { recipes, isLoading } = useFetchRecipeOverviews(infiniteScrollTriggerElement, initialRecipes);

  /**
   * the index of the item that is used for intersection
   */
  const scrollTargetIndex = Math.floor(recipes.length * (2 / 3));

  return (
    <>
      <Head>
        <title>Recipes</title>
      </Head>
      <ul className={styles['recipe-overview-list']}>
        {recipes.map((recipe, index) => {
          const isThreshold = scrollTargetIndex === index;
          return (
            <li
              className="[&>article]:h-full"
              ref={isThreshold ? infiniteScrollTriggerElement : undefined}
              key={recipe.id}
            >
              <RecipeOverviewCard recipe={recipe} />
            </li>
          );
        })}
      </ul>
      {isLoading && <LoadingSpinner text="One moment please. More recipes getting loaded..." />}
    </>
  );
}
