import { memo, VFC, useState } from 'react';

import { Page404Layout } from '../templates/Page404Layout';

export const Page404: VFC = memo(() => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(true);
  const [snackBarOpen, setSnackBarOpen] = useState<boolean>(true);
  return (
    <Page404Layout
      dialogOpen={dialogOpen}
      setDialogOpen={setDialogOpen}
      snackBarOpen={snackBarOpen}
      setSnackBarOpen={setSnackBarOpen}
    />
  );
});
