import { IRecipeOverview } from '../../../models/Recipe';
import { Text } from '../../Text/Text';
import { Card } from '../Card';

export function RecipeOverviewCard({ recipe: { description, title } }: { recipe: IRecipeOverview }) {
  const cardBody = (
    <div className="flex flex-col gap-4">
      <Text color="text-neutral-200">
        <span className="block overflow-hidden whitespace-nowrap text-ellipsis">{description}</span>
      </Text>
    </div>
  );

  return <Card title={title} body={cardBody} />;
}
