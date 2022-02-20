import React from "react";
import { useCommentContext } from "../../../contexts/commentContext";
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
  parentCommentId?: string | undefined;
};

const Comment = ({ comment, addReply, parentCommentId }: Props) => {
  const { commentsData, deleteComment } = useCommentContext();
  return (
    <Container>
      <CommentScoreSection>{comment.score}</CommentScoreSection>
      <CommentDetailsSection>
        <CommentHeader>
          {comment.user.username}
          {comment.user.username !== commentsData?.currentUser.username ? (
            <button onClick={() => addReply(comment.id)}>reply</button>
          ) : (
            <div>
              <button
                onClick={() => {
                  deleteComment(comment.id, parentCommentId);
                }}
              >
                delete
              </button>
              <button>edit</button>
            </div>
          )}
        </CommentHeader>
        <CommentContent>{comment.content}</CommentContent>
      </CommentDetailsSection>
    </Container>
  );
};

export default Comment;
