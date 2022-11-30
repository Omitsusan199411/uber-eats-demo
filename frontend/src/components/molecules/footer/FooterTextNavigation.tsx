// import ライブラリ
import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { List, ListItem, ListItemText } from '@mui/material';

// コンポーネント import
import { MaterialUiTheme } from '../../../theme/MaterialUiTheme';

type FooterTextListData = {
  id: number;
  path: string;
  primary: string;
  primaryprops: {
    fontSize: string;
  };
};

const footerTextList: FooterTextListData[] = [
  {
    id: 1,
    path: '/',
    primary: '会社概要',
    primaryprops: {
      fontSize: '12px'
    }
  },
  {
    id: 2,
    path: '/',
    primary: '特定商品取引法に基づく表記',
    primaryprops: {
      fontSize: '12px'
    }
  },
  {
    id: 3,
    path: '/',
    primary: '会社規約',
    primaryprops: {
      fontSize: '12px'
    }
  },
  {
    id: 4,
    path: '/',
    primary: '個人情報保護方針',
    primaryprops: {
      fontSize: '12px'
    }
  }
];

const ListItemCustom = styled(ListItem)`
  width: '100%';
  justify-content: center;
  border-bottom-style: none;
`;

const ListItemLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid #ffffff;
`;

const ListItemTextCustom = styled(ListItemText)`
  color: ${MaterialUiTheme.palette.primary.main};
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  &:hover {
    opacity: 0.7;
  }
`;

export const FooterTextNavigation: VFC = memo(() => (
  <List
    component="ul"
    sx={{
      display: { sm: 'block', md: 'flex' },
      justifyContent: { md: 'spaceBetween' }
    }}
  >
    {footerTextList.map((element: FooterTextListData) => (
      <ListItemCustom key={element.id} divider disableGutters>
        <ListItemLink to={element.path}>
          <ListItemTextCustom primary={element.primary} primaryTypographyProps={element.primaryprops} />
        </ListItemLink>
      </ListItemCustom>
    ))}
  </List>
));
