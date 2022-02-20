import React from "react";
import { ThemeProvider } from "@emotion/react";
import lightTheme from "./utils/themes/lightTheme";
import Comments from "./features/comments";
import { MainContainer } from "./App.styled";
import CommentForm from "./features/comments/components/CommentForm";
import { useCommentContext } from "./contexts/commentContext";

function App() {
  const { commentsData } = useCommentContext();
  return (
    <ThemeProvider theme={lightTheme}>
      <MainContainer>
        <Comments commentsData={commentsData} />
        <CommentForm />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
