import React from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import lightTheme from "./utils/themes/lightTheme";
import Comments from "./features/comments";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Comments />
      </div>
    </ThemeProvider>
  );
}

export default App;
