import React from 'react';

interface IProps {
  height?: number;
  children?: React.ReactNode;
}

export default function Card({ height, children }: IProps) {
  return (
    <div style={{ height }} className="bg-white p-2 rounded-xl">
      {children}
    </div>
  );
}
