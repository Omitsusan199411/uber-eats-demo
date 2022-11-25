// ライブラリ import
import { VFC, memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

// コンポーネント import
import { useAuthLineFoodsGet } from '../../hooks/api/useAuthLineFoodsGet';
import { useAuthOrdersPost } from '../../hooks/api/useAuthOrdersPost';
import { OrderDetailModal } from '../organisms/orders/OrderDetailModal';

export const Orders: VFC = memo(() => {
  const { lineFoodsGet, lineFoodsGetData } = useAuthLineFoodsGet();
  const { fetchStatus, lineFoodsList } = lineFoodsGetData;

  const { ordersPost, ordersPostFlag } = useAuthOrdersPost();

  const { postStatus } = ordersPostFlag;

  const [OrderModalFlagState, setOrderModalFlagState] = useState<boolean>(false);

  // カスタムフックの呼び出し
  // useEffectは第二引数に空の配列を指定すると初回のレンダリング後に実行される。第二引数を設定すると、設定した値が変更されたタイミングで実行される（デフォルト）
  // OrderModalStateの値(useState値)は次回のレンダリングの前に反映されるようになっている（デフォルト）
  useEffect(() => {
    lineFoodsGet();
    setOrderModalFlagState(!OrderModalFlagState);
  }, []);

  return (
    <>
      {fetchStatus === 'LOADING' && (
        <Backdrop open>
          <CircularProgress color="primary" thickness={5.0} />
        </Backdrop>
      )}
      {fetchStatus === 'OK' && postStatus !== 'OK' && (
        <OrderDetailModal
          lineFoodsList={lineFoodsList}
          ordersPost={ordersPost}
          orderModalFlagState={OrderModalFlagState}
          setOrderModalFlagState={setOrderModalFlagState}
        />
      )}
      {lineFoodsGetData.fetchStatus === 'OK' && ordersPostFlag.postStatus === 'OK' && (
        <Backdrop
          open
          sx={{
            backgroundColor: 'primary.sub'
          }}
        >
          <Box
            sx={{
              minWidth: { xs: '350px', sm: '450px' },
              backgroundColor: 'primary.main',
              // border: "dashed 3px primary.sub",
              borderRadius: '4px'
            }}
          >
            <Box
              component="p"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '18px', sm: '20px' },
                textAlign: 'center',
                mb: '40px',
                mt: '120px'
              }}
            >
              注文予定の商品はありません
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: '100px',
                fontSize: { xs: '16px', sm: '18px' }
              }}
            >
              <Link to="/">ホームページへ</Link>
            </Box>
          </Box>
        </Backdrop>
      )}
    </>
  );
});
