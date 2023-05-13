import Routing from "./router/Routing";
import { theme } from "./themes/themes";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </>
  );
}

export default App;
