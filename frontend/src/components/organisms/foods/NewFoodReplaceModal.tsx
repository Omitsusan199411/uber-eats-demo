// ライブラリ import
import { memo, VFC, useContext } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

// コンポーネント import
import { FoodLineReplaceButton } from '../../atoms/buttons/foods/FoodLineReplaceButton';
import { FoodReplaceModalCancelButton } from '../../atoms/buttons/foods/FoodReplaceModalCancelButton';

// createContext import
import { FoodModalContext } from '../../../contexts/foods/foodModalContext';

export const NewFoodReplaceModal: VFC = memo(() => {
  const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);
  const { isFoodReplaceModalOpen, existingRestaurant, newRestaurant } = FoodModalState;

  return (
    <Dialog
      open={isFoodReplaceModalOpen}
      onClose={() => {
        setFoodModalState({
          isFoodModalOpen: false,
          isFoodReplaceModalOpen: false,
          selectedFood: {},
          selectedFoodCount: 1,
          existingRestaurant: '',
          newRestaurant: ''
        });
      }}
      sx={{
        maxWidth: { xs: '420px', sm: '500px', md: '550px' },
        m: '0 auto'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'error.main'
        }}
      >
        <WarningAmberIcon
          color="primary"
          sx={{
            display: 'block',
            fontSize: { xs: '27px', sm: '35px' }
          }}
        />
        <DialogTitle
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            fontSize: { xs: '15px', sm: '18px' },
            p: '20px'
          }}
        >
          注文予定を変更しますか？
        </DialogTitle>
      </Box>
      <DialogContent
        sx={{
          fontSize: { xs: '15px', sm: '18px' },
          pt: '40px',
          pl: { xs: '40px', sm: '65px' },
          pr: { xs: '40px', sm: '65px' }
        }}
      >
        <Box>{`既にカートの中に${existingRestaurant}の商品が含まれています。\n新規注文を押すと${newRestaurant}の商品に置き換わりますがよろしいですか？`}</Box>
      </DialogContent>
      <DialogActions
        sx={{
          display: { xs: 'block', sm: 'flex' },
          justifyContent: { xs: 'none', sm: 'center' },
          textAlign: { xs: 'center' },
          pl: '40px',
          pr: '40px',
          pb: '30px',
          pt: '10px'
        }}
      >
        <FoodReplaceModalCancelButton />
        <FoodLineReplaceButton />
      </DialogActions>
    </Dialog>
  );
});
