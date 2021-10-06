import "./App.css";
import Header from "./Head/Header";
import Headerr from "./Head/Headerr";
import ImageSlider from "./Body/slideShow";
import Cards from "./components/cards";

import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Headerr />
      <ImageSlider/>
      
      Hello Peter
    </ThemeProvider>
  );
}

export default App;
