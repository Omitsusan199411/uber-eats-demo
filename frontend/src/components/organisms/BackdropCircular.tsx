// import ライブラリ
import { VFC, memo } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const BackdropCircular: VFC = memo(() => (
  <Backdrop open>
    <CircularProgress color="primary" thickness={5.0} />
  </Backdrop>
));
