import { Text } from '../Text/Text';
import styles from './LoadingSpinner.module.css';

interface ILoadingSpinnerProps {
  text?: string;
}

export function LoadingSpinner({ text }: ILoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center my-4 gap-4">
      <span className={styles.loader} />
      {text && <Text color="text-neutral-300">{text}</Text>}
    </div>
  );
}
