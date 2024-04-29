import clsx from 'clsx';
import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
}

const Text = ({ children, className }: TextProps) => {
  return (
    <div className={clsx('text-[3vw] md:text-sm lg:text-base', className)}>
      {children}
    </div>
  );
};
export default Text;
