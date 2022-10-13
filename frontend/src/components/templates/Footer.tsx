// ライブラリ import
import { VFC, memo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { Link as SnsLink } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// コンポーネント import
import { MaterialUiTheme } from "../../theme/MaterialUiTheme";

// 画像 import
import twitterIcon from "../../images/icons/twitter/twitter-icon.png";
import facebookIcon from "../../images/icons/facebook/facebook-icon.png";
import instagramIcon from "../../images/icons/instagram/instagram-icon.png";
import lineIcon from "../../images/icons/line/line-icon.png";

export const Footer: VFC = memo(() => {
  const isWide: boolean = useMediaQuery({
    query: `(min-width: ${MaterialUiTheme.breakpoints.values.sm}px)`,
  });
  const history = useHistory();
  const [value, setValue] = useState<string>("/");
  return (
    <>
      {isWide ? (
        <Box
          component="footer"
          sx={{
            backgroundColor: "basis.main",
            p: "100px",
            pb: "60px",
          }}
        >
          <Box component="nav" sx={{ maxWidth: "960px", m: "0 auto" }}>
            {/* フッターテキストナビゲーション */}
            <List
              component="ul"
              sx={{
                display: { sm: "block", md: "flex" },
                justifyContent: { md: "spaceBetween" },
              }}
            >
              <ListItemCustom divider={true} disableGutters={true}>
                <ListItemLink to={`/`}>
                  <ListItemTextCustom
                    primary="会社概要"
                    primaryTypographyProps={{ fontSize: "12px" }}
                  />
                </ListItemLink>
              </ListItemCustom>
              <ListItemCustom divider={true} disableGutters={true}>
                <ListItemLink to={`/`}>
                  <ListItemTextCustom
                    primary="特定商品取引法に基づく表記"
                    primaryTypographyProps={{ fontSize: "12px" }}
                  />
                </ListItemLink>
              </ListItemCustom>
              <ListItemCustom divider={true} disableGutters={true}>
                <ListItemLink to={`/`}>
                  <ListItemTextCustom
                    primary="会員規約"
                    primaryTypographyProps={{ fontSize: "12px" }}
                  />
                </ListItemLink>
              </ListItemCustom>
              <ListItemCustom divider={true} disableGutters={true}>
                <ListItemLink to={`/`}>
                  <ListItemTextCustom
                    primary="個人情報保護方針"
                    primaryTypographyProps={{ fontSize: "12px" }}
                  />
                </ListItemLink>
              </ListItemCustom>
              <ListItemCustom divider={true} disableGutters={true}>
                <ListItemLink to={`/`}>
                  <ListItemTextCustom
                    primary="お問い合わせ"
                    primaryTypographyProps={{ fontSize: "12px" }}
                  />
                </ListItemLink>
              </ListItemCustom>
            </List>
            {/* SNSアイコン リスト */}
            <List
              component="ul"
              sx={{ display: "flex", justifyContent: "center", mt: "25px" }}
            >
              <ListItemCustom sx={{ width: { xs: "15%", md: "8%" } }}>
                <SnsLink href="https://twitter.com/">
                  <SnsIconImage src={twitterIcon} alt="twitter" />
                </SnsLink>
              </ListItemCustom>
              <ListItemCustom sx={{ width: { xs: "15%", md: "8%" } }}>
                <SnsLink href="https://lin.ee/" sx={{ display: "block" }}>
                  <SnsIconImage src={lineIcon} alt="twitter" />
                </SnsLink>
              </ListItemCustom>
              <ListItemCustom sx={{ width: { xs: "15%", md: "8%" } }}>
                <SnsLink
                  href="https://www.instagram.com"
                  sx={{ display: "block" }}
                >
                  <SnsIconImage src={instagramIcon} alt="instagram" />
                </SnsLink>
              </ListItemCustom>
              <ListItemCustom sx={{ width: { xs: "15%", md: "8%" } }}>
                <SnsLink href="https://www.facebook.com/">
                  <SnsIconImage src={facebookIcon} alt="facebook" />
                </SnsLink>
              </ListItemCustom>
            </List>
            <Box
              component="p"
              sx={{
                fontSize: "12px",
                textAlign: "center",
                color: "primary.main",
                mt: "20px",
              }}
            >
              © フードデリバリー・TechEats
            </Box>
          </Box>
        </Box>
      ) : (
        <BottomNavigation
          component="footer"
          showLabels={true}
          value={value}
          onChange={async (event, newValue) => {
            await setValue(newValue);
            console.log(newValue);
            history.push(newValue);
          }}
          sx={{
            backgroundColor: "basis.main",
            position: "fixed",
            bottom: "0px",
            width: "100%",
          }}
        >
          <BottomNavigationAction
            label="ホーム"
            icon={<HomeIcon />}
            value="/"
            sx={{ color: "primary.main" }}
          />
          <BottomNavigationAction
            label="店舗一覧"
            icon={<RestaurantIcon />}
            value="/restaurants"
            sx={{ color: "primary.main" }}
          />
          <BottomNavigationAction
            label="フード一覧"
            value="/foods"
            icon={<FastfoodIcon />}
            sx={{ color: "primary.main" }}
          />
          <BottomNavigationAction
            label="カートを見る"
            icon={<ShoppingCartIcon />}
            sx={{ color: "primary.main" }}
          />
        </BottomNavigation>
      )}
    </>
  );
});

const ListItemCustom = styled(ListItem)`
  width: "100%";
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

const SnsIconImage = styled.img`
  width: 48px;
  height: auto;
  :hover {
    opacity: 0.7;
  }
`;
