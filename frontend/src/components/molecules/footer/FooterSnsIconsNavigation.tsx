// import ライブラリ
import { VFC, memo } from 'react';
import styled from 'styled-components';
import { List, ListItem, Link } from '@mui/material';

// 画像 import
import twitterIcon from '../../../images/icons/twitter/twitter-icon.png';
import facebookIcon from '../../../images/icons/facebook/facebook-icon.png';
import instagramColorIcon from '../../../images/icons/instagram/instagram-color-icon.png';
import lineIcon from '../../../images/icons/line/line-icon.png';

type FooterSnsIconsData = {
  id: number;
  href: string;
  src: string;
  alt: string;
};

const footerSnsIcons: FooterSnsIconsData[] = [
  {
    id: 1,
    href: 'https://twitter.com/',
    src: twitterIcon,
    alt: 'twitter'
  },
  {
    id: 2,
    href: 'https://lin.ee/',
    src: facebookIcon,
    alt: 'line'
  },
  {
    id: 3,
    href: 'https://www.instagram.com',
    src: instagramColorIcon,
    alt: 'instagram'
  },
  {
    id: 4,
    href: 'https://www.facebook.com/',
    src: lineIcon,
    alt: 'facebook'
  }
];

const ListItemCustom = styled(ListItem)`
  width: '100%';
  justify-content: center;
  border-bottom-style: none;
`;

const SnsIconImage = styled.img`
  width: 48px;
  height: auto;
  :hover {
    opacity: 0.7;
  }
`;

export const FooterSnsIconsNavigation: VFC = memo(() => (
  <List component="ul" sx={{ display: 'flex', justifyContent: 'center', mt: '25px' }}>
    {footerSnsIcons.map((element: FooterSnsIconsData) => (
      <ListItemCustom key={element.id} sx={{ width: { xs: '15%', md: '8%' }, mr: '15px' }}>
        <Link href={element.href}>
          <SnsIconImage src={element.src} alt={element.alt} />
        </Link>
      </ListItemCustom>
    ))}
  </List>
));
