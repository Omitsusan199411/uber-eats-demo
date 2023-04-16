// ライブラリ import
import { ReactNode } from 'react';

export type FooterNavigationItemsProps = {
  id: number;
  label: string;
  value: string;
  icon: ReactNode;
  sx: {
    color: string;
    '&:hover': {
      opacity: number;
    };
    span: {
      fontSize: { xs: string; sm: string };
    };
  };
};
