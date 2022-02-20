import React from "react";
import { IComment } from "../../../types/commentsTypes";
import {
  CommentContent,
  CommentDetailsSection,
  CommentHeader,
  CommentScoreSection,
  Container,
} from "./Comment.styled";

type Props = {
  comment: IComment;
  addReply: (commentId: string) => void;
};

const Comment = ({ comment, addReply }: Props) => {
  return (
    <Container>
      <CommentScoreSection>{comment.score}</CommentScoreSection>
      <CommentDetailsSection>
        <CommentHeader>
          {comment.user.username}
          <button onClick={() => addReply(comment.id)}>reply</button>
        </CommentHeader>
        <CommentContent>{comment.content}</CommentContent>
      </CommentDetailsSection>
    </Container>
  );
};

export default Comment;
