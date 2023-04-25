import React from 'react';
import Card from './Card';

interface IProps {
  children: React.ReactNode;
}

export default function Content({ children }: IProps) {
  return (
    <Card height={800} classname="flex-shrink w-6/12">
      {children}
    </Card>
  );
}
