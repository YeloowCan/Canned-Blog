import React from 'react';

interface IProps {
  height?: number;
  children?: React.ReactNode;
  classname?: string;
}

export default function Card({ height, children, classname }: IProps) {
  return (
    <div style={{ height }} className={`bg-white p-2 rounded-xl ${classname}`}>
      {children}
    </div>
  );
}
