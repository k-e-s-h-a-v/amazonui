import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: [
      'Amazon Ember Light',
      'Amazon Ember',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
