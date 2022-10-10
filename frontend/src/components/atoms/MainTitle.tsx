// ライブラリ import
import Box from "@mui/material/Box";

export const MainTitle = () => {
  return (
    <Box
      component="span"
      sx={{
        display: { xs: "none", sm: "inline" },
        color: "secondary.main",
        fontFamily: "Roboto",
        fontSize: { sm: "25px", md: "28px" },
      }}
    >
      Tech Eats
    </Box>
  );
};
