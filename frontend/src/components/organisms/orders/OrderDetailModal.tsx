// ライブラリ import
import { memo, VFC } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from 'styled-components';

// コンポーネント import
import { OrderButton } from '../../atoms/buttons/orders/OrderButton';
import { OrderCancelButton } from '../../atoms/buttons/orders/OrderCancelButton';
import { MaterialUiTheme } from '../../../theme/MaterialUiTheme';

// 型 import
import { OrderModalProps, OrdersDialogContentArray } from '../../../types/api/Order';

const OrderDialogBox = styled(Box)`
  // widthがsm以上
  @media (min-width: ${MaterialUiTheme.breakpoints.values.sm}px) {
    padding: 6px;
    border-bottom: 1px solid;
    border-color: #aaaaaa;
    display: flex;
    justify-content: space-between;
  }
  // widthがxs以上sm未満の場合
  @media (min-width: ${MaterialUiTheme.breakpoints.values.xs}px) {
    padding: 3px;
    border-bottom: 1px solid;
    border-color: #aaaaaa;
    display: flex;
    justify-content: space-between;
  }
`;

const OrderDialogContentText = styled(DialogContentText)`
  @media (min-width: ${MaterialUiTheme.breakpoints.values.sm}px) {
    margin-top: 15px;
    color: ${MaterialUiTheme.palette.basis.main};
    font-size: '16px';
  }
  @media (min-width: ${MaterialUiTheme.breakpoints.values.xs}px) {
    margin-top: 15px;
    color: ${MaterialUiTheme.palette.basis.main};
    font-size: '14px';
  }
`;

// Orders.tsxからpropsをもらう。propsの中身はModalのon,offのbooleanとlineFoodsDataの中身をstateとしてもらう
export const OrderDetailModal: VFC<OrderModalProps> = memo((props) => {
  const { lineFoodsList, ordersPost, orderModalFlagState, setOrderModalFlagState } = props;

  const history = useHistory();

  const { lineFoodIds, restaurant, count, amount } = lineFoodsList;

  const ordersDialogContent: OrdersDialogContentArray[] = [
    {
      id: 1,
      title: '店舗名',
      content: restaurant.name
    },
    {
      id: 2,
      title: '商品数',
      content: `${count.toLocaleString()}個`
    },
    {
      id: 3,
      title: '商品価格',
      content: `¥${amount.toLocaleString()}円`
    },
    {
      id: 4,
      title: '配送料',
      content: `¥${restaurant.fee.toLocaleString()}円`
    }
  ];

  return (
    <Dialog
      open={orderModalFlagState}
      onClose={() => {
        setOrderModalFlagState(!orderModalFlagState);
        history.push('/');
      }}
      sx={{ overflowWrap: 'break-word' }}
    >
      <DialogTitle
        sx={{
          p: '20px',
          fontWeight: 'bold',
          color: 'primary.main',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'secondary.main',
          boder: 'none'
        }}
      >
        <CheckCircleIcon sx={{ mr: '15px' }} />
        注文内容の確認
      </DialogTitle>
      <DialogContent
        sx={{
          minWidth: { sm: '450px' },
          pl: { xs: '40px', sm: '65px' },
          pr: { xs: '40px', sm: '65px' }
        }}
      >
        <Box
          sx={{
            color: 'basis.main',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: { xs: '13px', sm: '15px' },
            mt: '15px',
            mb: '10px'
          }}
        >
          以下の注文を確定してよろしいですか？
        </Box>
        {ordersDialogContent.map((text: OrdersDialogContentArray) => (
          <OrderDialogBox key={text.id}>
            <OrderDialogContentText>{text.title}</OrderDialogContentText>
            <OrderDialogContentText>{text.content}</OrderDialogContentText>
          </OrderDialogBox>
        ))}
        <OrderDialogBox>
          <OrderDialogContentText sx={{ fontWeight: 'bold' }}>合計</OrderDialogContentText>
          <OrderDialogContentText sx={{ fontWeight: 'bold' }}>{`¥${(
            restaurant.fee + amount
          ).toLocaleString()}円`}</OrderDialogContentText>
        </OrderDialogBox>
        <DialogContentText
          sx={{
            mt: '25px',
            mb: '20px',
            fontSize: { xs: '13px', sm: '15px' },
            textAlign: 'center'
          }}
        >
          ※ 到着時間は10分を予定
        </DialogContentText>
        {/* OrderButtonの押下をトリガーにorderPostを発火 PropsとしてordersPostを渡す */}
        <DialogActions
          sx={{
            display: { xs: 'block', sm: 'flex' },
            justifyContent: { sm: 'center' },
            alignItems: { sm: 'center' },
            textAlign: { xs: 'center' },
            p: '0px'
          }}
        >
          <OrderCancelButton
            orderModalFlagState={orderModalFlagState}
            setOrderModalFlagState={setOrderModalFlagState}
          />
          <OrderButton lineFoodIds={lineFoodIds} ordersPost={ordersPost} />
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
});
