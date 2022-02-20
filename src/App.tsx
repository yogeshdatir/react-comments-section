import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import lightTheme from "./utils/themes/lightTheme";
import Comments from "./features/comments";
import { MainContainer } from "./App.styled";
import data from "./assets/data/data.json";
import { IComment, IReply, Response } from "./types/commentsTypes";
import CommentForm from "./features/comments/components/CommentForm";

function App() {
  const [commentsData, setCommentsData] = useState<Response>(data);

  const addNewComment = (newComment: IComment) => {
    setCommentsData({
      ...commentsData,
      comments: [...commentsData.comments, newComment],
    });
  };

  const addNewReply = (parentCommentId: string, newComment: IReply) => {
    let oldParentCommentIndex: number | undefined;
    let newParentComment: IComment | undefined;
    commentsData.comments.forEach((comment: IComment, index: number) => {
      const matched: boolean = comment.id === parentCommentId;
      if (matched) {
        oldParentCommentIndex = index;
        newParentComment = comment;
        return;
      }
      if (!matched) {
        const matchedInReplies: IReply | undefined = comment.replies?.find(
          (reply: IReply) => reply.id === parentCommentId
        );
        if (!matchedInReplies) return;

        oldParentCommentIndex = index;
        newParentComment = comment;
        return;
      }
    });

    if (!newParentComment) console.error("Parent Comment does not exist...");
    else {
      newParentComment?.replies?.push(newComment);

      let updatedComments = [...commentsData.comments];
      if (oldParentCommentIndex)
        updatedComments.splice(oldParentCommentIndex, 1, newParentComment);

      setCommentsData({
        ...commentsData,
        comments: [...updatedComments],
      });
    }
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <MainContainer>
        <Comments
          commentsData={commentsData}
          addNewComment={addNewComment}
          addNewReply={addNewReply}
        />
        <CommentForm
          currentUser={commentsData.currentUser}
          addNewComment={addNewComment}
          addNewReply={addNewReply}
        />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
