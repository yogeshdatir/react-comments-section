import React, { useState } from "react";
import { IComment, ICurrentUser, IReply } from "../../../types/commentsTypes";
import { CommentFormContainer } from "./CommentForm.styled";
import { v4 as uuidv4 } from "uuid";

type Props = {
  parentCommentId?: string;
  currentUser: ICurrentUser;
  parentCommentUser?: string;
  cancelReply?: (commentId: string) => void;
  addNewComment: (newComment: IComment) => void;
  addNewReply: (parentCommentId: string, newComment: IReply) => void;
};

const CommentForm = ({
  parentCommentId,
  currentUser,
  parentCommentUser,
  cancelReply,
  addNewComment,
  addNewReply,
}: Props) => {
  const [newComment, setNewComment] = useState<IComment | null>(null);

  const handleChange = (e: any) => {
    setNewComment({
      id: uuidv4(),
      content: e.target.value,
      createdAt: new Date().toISOString(),
      score: 0,
      user: currentUser,
      replies: [],
    });
  };

  const handleSubmit = () => {
    if (!newComment) return;

    if (parentCommentId && parentCommentUser) {
      addNewReply(parentCommentId, {
        ...newComment,
        id: uuidv4(),
        replyingTo: parentCommentUser,
      });
      parentCommentId && cancelReply && cancelReply(parentCommentId);
    } else {
      addNewComment(newComment);
      setNewComment(null);
    }
  };

  return (
    <CommentFormContainer>
      <p>{currentUser.username}</p>
      <div>
        <textarea value={newComment?.content || ""} onChange={handleChange} />
        <button onClick={handleSubmit}>
          {parentCommentId ? `reply` : `Send`}
        </button>
        {cancelReply && (
          <button
            onClick={() =>
              parentCommentId !== undefined && cancelReply(parentCommentId)
            }
          >
            cancel
          </button>
        )}
      </div>
    </CommentFormContainer>
  );
};

export default CommentForm;
