import type { ReactNode } from 'react';

type TModal = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};
export type { TModal };
