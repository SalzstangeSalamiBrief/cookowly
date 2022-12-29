import { Text } from '../Text/Text';
import styles from './LoadingSpinner.module.css';

interface ILoadingSpinnerProps {
  /**
   * optional text to display under the loading spinner
   */
  text?: string;
}

/**
 * A loading spinner that can display additional text to inform the user about the current state
 *
 * @param ILoadingSpinnerProps
 * @returns a loading spinner component
 */
export function LoadingSpinner({ text }: ILoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center my-4 gap-4">
      <span className={styles.loader} />
      {text && <Text color="text-neutral-300">{text}</Text>}
    </div>
  );
}
