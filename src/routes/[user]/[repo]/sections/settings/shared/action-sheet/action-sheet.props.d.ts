import type { ReactNode } from 'react';

export interface ActionSheetProps {
  title: string;
  description: string;
  button: ReactNode;
  className?: string;
}
