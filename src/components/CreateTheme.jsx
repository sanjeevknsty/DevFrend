import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --default-font-feature-settings: normal;
          --default-font-variation-settings: normal;
        }
        body {
          font-feature-settings: var(--default-font-feature-settings);
          font-variation-settings: var(--default-font-variation-settings);
        }
      `,
    },
  },
});

export default theme;
