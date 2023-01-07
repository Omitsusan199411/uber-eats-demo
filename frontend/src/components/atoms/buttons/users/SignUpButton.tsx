// ライブラリ import
import { Button } from '@mui/material';
import styled from 'styled-components';
import { MaterialUiTheme } from '../../../../theme/MaterialUiTheme';

const CustomSignUpButton = styled(Button)`
  border-radius: 0px;
  margin-top: 40px;
  font-weight: bold;
  color: ${MaterialUiTheme.palette.primary.main};
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  @media (max-width: ${MaterialUiTheme.breakpoints.values.sm}px) {
    width: 90%;
    height: 40px;
  }
  @media (min-width: ${MaterialUiTheme.breakpoints.values.sm}px) {
    width: 80%;
    height: 50px;
  }
`;

export const SignUpButton = () => {
  return (
    <CustomSignUpButton type="submit" variant="contained" color="secondary">
      サインアップ
    </CustomSignUpButton>
  );
};
