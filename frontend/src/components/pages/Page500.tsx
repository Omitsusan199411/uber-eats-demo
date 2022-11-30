import { memo, VFC, useState } from 'react';

import { Page500Layout } from '../templates/Page500Layout';

export const Page500: VFC = memo(() => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(true);
  const [snackBarOpen, setSnackBarOpen] = useState<boolean>(true);
  return (
    <Page500Layout
      dialogOpen={dialogOpen}
      setDialogOpen={setDialogOpen}
      snackBarOpen={snackBarOpen}
      setSnackBarOpen={setSnackBarOpen}
    />
  );
});
