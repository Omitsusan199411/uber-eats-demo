// ライブラリ import
import Box from "@mui/material/Box";

// コンポーネント import
import "../../GoogleFont.css";

export const MainTitle = () => {
  return (
    <Box
      component="span"
      sx={{
        display: { xs: "none", sm: "inline" },
        color: "#008000",
        fontFamily: "Roboto",
        fontSize: { sm: "18px", md: "22px", lg: "24px" },
      }}
    >
      Tech Eats
    </Box>
  );
};
