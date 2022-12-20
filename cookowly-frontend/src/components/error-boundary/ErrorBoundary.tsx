import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '../buttons/Button';
import { Text } from '../Text/Text';

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error: ', error, errorInfo);
  }

  render() {
    const { state, props } = this;
    if (state.hasError) {
      return (
        <div
          className={`
          error-boundary    
          my-4 mx-auto w-full md:w-1/2 lg:w-1/3 xl:w-1/4
          h-fit p-4 text-danger-50 bg-danger-900 rounded-md`}
        >
          <Text type="heading" as="h1" margin="my-4" size="xl" color="text-primary-50">
            Something went wrong.
          </Text>
          <div className="flex justify-end">
            <Button text="Try again" as="nextLink" href="/" variant="ghost" />
          </div>
        </div>
      );
    }

    return props.children;
  }
}
