import styles from './LoadingSpinner.module.css';

interface ILoadingSpinnerProps {
  text?: string;
}

export function LoadingSpinner({ text }: ILoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center my-4">
      <span className={styles.loader} />
      {text && <p className="mt-4">{text}</p>}
    </div>
  );
}
