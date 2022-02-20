import React, { Fragment, useState } from "react";
import {
  CommentsContainer,
  ReplyContainer,
  ReplyTimeline,
} from "./Comments.styled";
import { IComment, IReply, Response } from "../../types/commentsTypes";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";

type Props = {
  commentsData: Response;
  addNewComment: (newComment: IComment) => void;
  addNewReply: (parentCommentId: string, newComment: IReply) => void;
};

const Comments = ({
  commentsData: { comments, currentUser },
  addNewComment,
  addNewReply,
}: Props) => {
  const [commentsToReply, setCommentsToReply] = useState<string[]>([]);

  const addReply = (commentId: string) => {
    const newCommentsToReply = new Set([...commentsToReply, commentId]);
    setCommentsToReply(Array.from(newCommentsToReply));
  };

  const cancelReply = (commentId: string) => {
    if (commentsToReply.includes(commentId)) {
      setCommentsToReply([
        ...commentsToReply.filter(
          (commentToReplyId: string) => commentToReplyId !== commentId
        ),
      ]);
    }
  };

  return (
    <CommentsContainer>
      {comments.map((comment: IComment) => (
        <Fragment key={comment.id}>
          <Comment comment={comment} addReply={addReply} />
          {commentsToReply.includes(comment.id) && (
            <CommentForm
              parentCommentId={comment.id}
              parentCommentUser={comment.user.username}
              currentUser={comment.user}
              cancelReply={cancelReply}
              addNewComment={addNewComment}
              addNewReply={addNewReply}
            />
          )}
          {!!comment.replies?.length && (
            <ReplyContainer>
              <ReplyTimeline />
              <Comments
                commentsData={{ comments: comment.replies, currentUser }}
                addNewComment={addNewComment}
                addNewReply={addNewReply}
              />
            </ReplyContainer>
          )}
        </Fragment>
      ))}
    </CommentsContainer>
  );
};

export default Comments;
