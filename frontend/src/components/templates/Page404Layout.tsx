import { memo, VFC, Dispatch, SetStateAction } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Box, Dialog, Snackbar, Alert } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Page404LayoutProps = {
  dialogOpen: boolean;
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
  snackBarOpen: boolean;
  setSnackBarOpen: Dispatch<SetStateAction<boolean>>;
};

const linkFlashing = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const LinkBox = styled(Box)`
  animation: ${linkFlashing} 1s linear infinite;
`;

export const Page404Layout: VFC<Page404LayoutProps> = memo((props) => {
  const { dialogOpen, setDialogOpen, snackBarOpen, setSnackBarOpen } = props;
  const history = useHistory();
  return (
    <Dialog
      open={dialogOpen}
      onClose={() => {
        setDialogOpen(false);
        history.push('/');
      }}
      sx={{ backgroundColor: 'secondary.main' }}
      PaperProps={{
        style: {
          borderRadius: '50%',
          textAlign: 'center'
        }
      }}
    >
      <Box
        sx={{
          minWidth: { xs: '230px', sm: '400px', md: '550px' },
          p: { xs: '30px', sm: '70px', md: '120px' }
        }}
      >
        <Box
          component="h1"
          sx={{
            color: 'secondary.main',
            fontSize: { xs: '65px', sm: '120px', md: '160px' },
            fontWeight: 'bold',
            m: '0px',
            lineHeight: '1.2'
          }}
        >
          404
        </Box>
        <Box
          component="p"
          sx={{
            color: 'secondary.main',
            fontSize: { xs: '20px', sm: '30px', md: '40px' },
            fontWeight: 'bold',
            m: '0px'
          }}
        >
          The page not found
        </Box>
        <LinkBox
          component="p"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '14px', sm: '18px', md: '22px' }
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: '#2a6c50',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <NavigateNextIcon />
            トップページへ
          </Link>
        </LinkBox>
      </Box>
      <Snackbar
        open={snackBarOpen}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        sx={{ width: '80%', m: '0 auto' }}
      >
        <Alert
          severity="error"
          onClose={() => {
            setSnackBarOpen(false);
          }}
        >
          アクセスしようとしたページは見つかりませんでした
        </Alert>
      </Snackbar>
    </Dialog>
  );
});