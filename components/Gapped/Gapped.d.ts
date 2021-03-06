import * as React from 'react';

export interface GappedProps {
  gap?: number;
  vertical?: boolean;
  verticalAlign?: 'top' | 'middle' | 'baseline' | 'bottom';
  children?: React.ReactNode;
}

export interface GappedState {}

export default class Gapped extends React.Component<GappedProps, GappedState> {}
