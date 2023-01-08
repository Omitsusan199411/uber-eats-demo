// ライブラリ import
import { VFC, memo } from 'react';
import Box from '@mui/material/Box';

type MainTitleProps = {
  family: string;
  weight: number;
  type: string;
  size: {
    xs: string;
    sm: string;
    md: string;
  };
  bgColor: string;
};

export const MainTitle: VFC<MainTitleProps> = memo((props) => {
  const { family, weight, type, size, bgColor } = props;
  const { xs, sm, md } = size;
  return (
    <Box
      component="span"
      sx={{
        color: 'secondary.main',
        fontFamily: family,
        fontWeight: weight,
        fontStyle: type,
        fontSize: { xs: xs, sm: sm, md: md },
        backgroundColor: bgColor
      }}
    >
      Tech Eats
    </Box>
  );
});
