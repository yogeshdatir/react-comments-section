import React, { Fragment, useState } from "react";
import {
  CommentsContainer,
  ReplyContainer,
  ReplyTimeline,
} from "./Comments.styled";
import { IComment, IUser, IReply, Response } from "../../types/commentsTypes";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";

type Props = {
  commentsData: Response | null;
  parentCommentId?: string | undefined;
};

const Comments = ({ commentsData, parentCommentId }: Props) => {
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
      {commentsData?.comments.map((comment: IComment) => (
        <Fragment key={comment.id}>
          <Comment
            comment={comment}
            addReply={addReply}
            parentCommentId={parentCommentId}
          />
          {commentsToReply.includes(comment.id) && (
            <CommentForm
              parentCommentId={comment.id}
              parentCommentUser={comment.user.username}
              cancelReply={cancelReply}
            />
          )}
          {!!comment.replies?.length && (
            <ReplyContainer>
              <ReplyTimeline />
              <Comments
                commentsData={{
                  comments: comment.replies,
                  currentUser: commentsData.currentUser,
                }}
                parentCommentId={comment.id}
              />
            </ReplyContainer>
          )}
        </Fragment>
      ))}
    </CommentsContainer>
  );
};

export default Comments;
