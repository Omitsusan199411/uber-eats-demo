// import ライブラリ
import { memo, VFC } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

// 型 import
import { NewFoodReplace } from "../../../types/api/Food";

type NewFoodReplaceProps = {
  NewFoodReplaceState: NewFoodReplace;
  onClose: () => void;
};

export const NewFoodReplaceModal: VFC<NewFoodReplaceProps> = memo((props) => {
  const { NewFoodReplaceState } = props;
  return (
    <Dialog open={NewFoodReplaceState.isOpen}>
      <DialogContent>
        {NewFoodReplaceState.newReplaceSelectedFood.name}
      </DialogContent>
    </Dialog>
  );
});
