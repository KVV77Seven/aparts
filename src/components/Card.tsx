import clsx from 'clsx';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Card = ({ title, children, className }: CardProps) => {
  return (
    <div className={clsx('bg-white shadow-lg p-8', className)}>
      <h3 className="text-slate-800 text-2xl font-medium">{title}</h3>
      <div className="mt-8">{children}</div>
    </div>
  );
};
export default Card;
