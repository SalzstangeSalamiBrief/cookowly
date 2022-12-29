import Head from 'next/head';
import { useRef } from 'react';
import { RecipeOverviewCard } from '../../components/card/wrapper/RecipeOverviewCard';
import { LoadingSpinner } from '../../components/loading-spinner/LoadingSpinner';
import { useFetchRecipeOverviews } from '../../hooks/useFetchRecipeOverviews';

import styles from './index.module.css';
/**
 * TODO
 *  1. Error State
 *  2. Get data from Backend
 */

export default function Recipes() {
  const infiniteScrollTriggerElement = useRef<HTMLLIElement>(null);
  const { recipes, isLoading } = useFetchRecipeOverviews(infiniteScrollTriggerElement);

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
