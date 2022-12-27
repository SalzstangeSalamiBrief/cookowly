import { RecipeOverview } from '../../../models/Recipe';
import { Text } from '../../Text/Text';
import { Card } from '../Card';

import styles from '../card.module.css';

export function RecipeOverviewCard({ recipe: { description, title } }: { recipe: RecipeOverview }) {
  const cardBody = (
    <div className="flex flex-col gap-4">
      <Text color="text-neutral-200">
        <span className={`block overflow-hidden text-ellipsis ${styles['clamped-description']}`}>{description}</span>
      </Text>
    </div>
  );

  return <Card title={title} body={cardBody} />;
}
