import React, { useState } from "react";
import { IComment, IReply, IUser } from "../../../types/commentsTypes";
import { CommentFormContainer } from "./CommentForm.styled";
import { v4 as uuidv4 } from "uuid";
import { useCommentContext } from "../../../contexts/commentContext";

type Props = {
  parentCommentId?: string;
  parentCommentUser?: string;
  cancelReply?: (commentId: string) => void;
};

const CommentForm = ({
  parentCommentId,
  parentCommentUser,
  cancelReply,
}: Props) => {
  const { commentsData, addNewComment, addNewReply } = useCommentContext();

  let currentUser: IUser = {
    username: "",
    image: { webp: "", png: "" },
  };
  if (commentsData) currentUser = { ...commentsData.currentUser };

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
        content: newComment.content.replace(`@${parentCommentUser} `, ""),
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
        <textarea
          value={
            parentCommentId && !newComment
              ? `@${parentCommentUser} `
              : newComment?.content || ""
          }
          onChange={handleChange}
        />
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
