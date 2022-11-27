// TODO:
// 1. load data => new hook
// 2. loading spinner
// 3. Error message
// 4. Display recipes

import { LoadingSpinner } from '../../components/common/loading-spinner/LoadingSpinner';

export default function Recipes() {
  return (
    <>
      <h1>Recipe</h1>
      <LoadingSpinner />
    </>
  );
}
