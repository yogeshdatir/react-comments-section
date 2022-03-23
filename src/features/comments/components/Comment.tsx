import { useState } from "react";
import { useCommentContext } from "../../../contexts/commentContext";
import { IComment_Reply } from "../../../types/commentsTypes";
import PlusIcon from "../../../assets/images/icon-plus.svg";
import MinusIcon from "../../../assets/images/icon-minus.svg";

import {
  CommentContent,
  CommentDetailsSection,
  CommentHeader,
  CommentScoreSection,
  Container,
} from "./Comment.styled";

type Props = {
  comment: IComment_Reply;
  addReply: (commentId: string) => void;
  parentCommentId?: string | undefined;
};

const Comment = ({ comment, addReply, parentCommentId }: Props) => {
  const { commentsData, deleteComment, updateComment, updateScore } =
    useCommentContext();
  const [edit, setEdit] = useState<boolean>(false);
  const [commentContent, setCommentContent] = useState<string>(comment.content);

  const handleEdit = (e: any) => {
    setCommentContent(
      e.target.value
        .replace(`@${comment.replyingTo} `, "")
        .replace(`@${comment.replyingTo}`, "")
    );
  };

  const handleAddScore = (commentId: string) => {
    updateScore(commentId, "add");
  };

  const handleSubtractScore = (commentId: string) => {
    updateScore(commentId, "subtract");
  };

  return (
    <Container>
      <CommentScoreSection>
        <img
          src={PlusIcon}
          style={{ height: "10px", width: "10px" }}
          alt="add score"
          onClick={() => handleAddScore(comment.id)}
        />
        {comment.score}
        <img
          src={MinusIcon}
          style={{ height: "2.5px", width: "10px" }}
          alt="subtract score"
          onClick={() => handleSubtractScore(comment.id)}
        />
      </CommentScoreSection>
      <CommentDetailsSection>
        <CommentHeader>
          {comment.user.username}
          {comment.user.username !== commentsData?.currentUser.username ? (
            <button onClick={() => addReply(comment.id)}>reply</button>
          ) : !edit ? (
            <div>
              <button
                onClick={() => {
                  deleteComment(comment.id, parentCommentId);
                }}
              >
                delete
              </button>
              <button onClick={() => setEdit(true)}>edit</button>
            </div>
          ) : null}
        </CommentHeader>
        {!edit ? (
          <CommentContent>
            {comment.replyingTo
              ? `@${comment.replyingTo} ${comment.content}`
              : comment.content}
          </CommentContent>
        ) : (
          <>
            <textarea
              value={
                comment.replyingTo
                  ? `@${comment.replyingTo} ${commentContent}`
                  : commentContent || ""
              }
              onChange={handleEdit}
            />
            <button
              onClick={() => {
                updateComment({ ...comment, content: commentContent });
                setEdit(false);
              }}
            >
              Update
            </button>
            <button onClick={() => setEdit(false)}>cancel</button>
          </>
        )}
      </CommentDetailsSection>
    </Container>
  );
};

export default Comment;
