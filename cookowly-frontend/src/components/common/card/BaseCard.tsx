interface IBaseCardProps {
  children: React.ReactNode;
}

export function BaseCard({ children }: IBaseCardProps) {
  return <article className="p-8 my-8 bg-neutral-800 rounded-lg">{children}</article>;
}
