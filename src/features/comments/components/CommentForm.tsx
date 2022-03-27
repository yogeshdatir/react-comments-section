import React, { useState } from "react";
import { IComment, IUser } from "../../../types/commentsTypes";
import {
  ActionContainer,
  CommentContentContainer,
  CommentFormContainer,
  CommentTextArea,
  PrimaryButton,
} from "./CommentForm.styled";
import { v4 as uuidv4 } from "uuid";
import { useCommentContext } from "../../../contexts/commentContext";
import { UserAvatar } from "./Comment.styled";

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
      <UserAvatar
        src={require(`../../../assets${currentUser.image.png}`)}
        alt="profile"
      />
      <CommentContentContainer>
        <CommentTextArea
          value={
            parentCommentId && !newComment
              ? `@${parentCommentUser} `
              : newComment?.content || ""
          }
          onChange={handleChange}
          autoFocus={true}
        />
        <ActionContainer>
          <PrimaryButton onClick={handleSubmit}>
            {parentCommentId ? `reply` : `Send`}
          </PrimaryButton>
          {cancelReply && (
            <PrimaryButton
              onClick={() =>
                parentCommentId !== undefined && cancelReply(parentCommentId)
              }
            >
              cancel
            </PrimaryButton>
          )}
        </ActionContainer>
      </CommentContentContainer>
    </CommentFormContainer>
  );
};

export default CommentForm;
