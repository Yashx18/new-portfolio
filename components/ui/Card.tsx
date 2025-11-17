import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  className?: string;
}

import React from 'react'

export const Card = ({children, className, ...props}: CardProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}
