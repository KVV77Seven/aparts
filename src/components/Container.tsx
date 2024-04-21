import React, { ReactNode } from 'react';

interface TestProps {
  children?: ReactNode;
  className?: string;
}

function Container({ children, className }: TestProps) {
  return (
    <div className={`max-w-[1000px] mx-auto my-0 ${className}`}>{children}</div>
  );
}

export default Container;
