// ライブラリ import
import { memo, VFC, useContext } from 'react';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';

// コンポーネント import
import { useAuthLineFoodsPost } from '../../../../hooks/api/useAuthLineFoodsPost';
import { BasicButton } from '../BasicButton';

// createContext import
import { FoodModalContext } from '../../../../contexts/foods/FoodModalContext';

export const FoodLineRegistButton: VFC = memo(() => {
  const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);
  const { selectedFoodCount, selectedFood } = FoodModalState;
  const { lineFoodsPost } = useAuthLineFoodsPost();

  return (
    <BasicButton
      color="basis"
      variant="contained"
      startIcon={<SendIcon sx={{ mr: { xs: '5px' }, ml: { sm: '20px' } }} />}
      sx={{
        width: { xs: '50%', md: '60%' },
        alignItems: 'center',
        justifyContent: { xs: 'row', sm: 'space-around' },
        p: '8px',
        pl: '15px',
        pr: '20px',
        color: 'primary.main'
      }}
      onClick={() => {
        lineFoodsPost(FoodModalState, setFoodModalState);
      }}
    >
      <Box sx={{ display: { xs: 'none', sm: 'inline' } }}>{`${selectedFoodCount}点を注文に追加`}</Box>
      <Box sx={{ display: 'inline' }}>{`￥${(selectedFood.price * selectedFoodCount).toLocaleString()} 円`}</Box>
    </BasicButton>
  );
});
