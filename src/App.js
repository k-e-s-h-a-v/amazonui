import "./App.css";
import Header from "./Head/Header";
import Headerr from "./Head/Headerr";
import ImageSlider from "./Body/slideShow";
import Cards from "./components/cards";

import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    This website was made for learning purposes only. all images
                    and design are owned by amazon.com.{" "}
                </div>
                <Header />
                <Headerr />
                <ImageSlider />
            </ThemeProvider>
        </>
    );
}

export default App;
