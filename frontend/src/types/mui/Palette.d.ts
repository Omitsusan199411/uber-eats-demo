// Materil-Uiのデフォルト型を拡張
export declare module '@mui/material/styles' {
  interface Palette {
    secondary: {
      main: string;
      light: string;
      sub: string;
    };
    basis: {
      main: string;
      light: string;
      sub: string;
    };
  }
  interface PaletteOptions {
    secondary?: {
      main?: string;
      light?: string;
      sub?: string;
    };
    basis?: {
      main?: string;
      light?: string;
      sub?: string;
    };
  }
  interface PaletteColor {
    sub?: string;
  }
  interface SimplePaletteColorOptions {
    sub?: string;
  }
}

export declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    basis: true;
  }
}
