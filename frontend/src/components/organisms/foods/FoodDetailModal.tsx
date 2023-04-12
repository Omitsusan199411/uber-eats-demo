// ライブラリ import
import { memo, VFC, useContext, useCallback } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

// コンポーネント import
import { FoodDetailModalCloseButton } from '../../atoms/buttons/foods/FoodDetailModalCloseButton';
import { FoodLineRegistButton } from '../../atoms/buttons/foods/FoodLineRegistButton';
import { FoodCountForm } from '../../molecules/form/FoodCountForm';

// 画像 import
import foodModalImage from '../../../images/foods/food-image.jpg';

// createContext import
import { FoodModalContext } from '../../../contexts/foods/FoodModalContext';

export const FoodDetailModal: VFC = memo(() => {
  const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);
  const { isFoodModalOpen, selectedFood } = FoodModalState;

  // 注文数量の変更
  // イベントオブジェクトは呼び出される関数内で使用しないので、イベントの型定義は不要になる。
  // useCallbackで関数の更新(キャッシュを持たせ不変の値とする)に伴うprops（CountUpButton、CountDownButtonコンポーネントへのprops）の更新を防ぎ、不要な再レンダリングを防ぐ。
  // useCallbackの副作用関数をFoodModalStateを設定する必要がある。設定しないと２回目押下以降カウントが増減しない。
  const CountUp = useCallback((): void => {
    setFoodModalState({
      ...FoodModalState,
      selectedFoodCount: FoodModalState.selectedFoodCount + 1
    });
  }, [setFoodModalState, FoodModalState]);
  const CountDown = useCallback((): void => {
    setFoodModalState({
      ...FoodModalState,
      selectedFoodCount: FoodModalState.selectedFoodCount - 1
    });
  }, [setFoodModalState, FoodModalState]);

  return (
    <Dialog
      open={isFoodModalOpen}
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
    >
      <FoodDetailModalCloseButton />
      <Box component="img" src={`${foodModalImage}`} alt="Food ModalImage" />
      <DialogTitle>{selectedFood?.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>{selectedFood?.description}</DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', pt: '25px' }}>
        <FoodCountForm CountUp={CountUp} CountDown={CountDown} />
        <FoodLineRegistButton />
      </DialogActions>
    </Dialog>
  );
});
