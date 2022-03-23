import { useState } from "react";
import { useCommentContext } from "../../../contexts/commentContext";
import {
  IComment,
  IComment_Reply,
  IReply,
  IUser,
} from "../../../types/commentsTypes";
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
  const { commentsData, deleteComment, updateComment } = useCommentContext();
  const [edit, setEdit] = useState<boolean>(false);
  const [commentContent, setCommentContent] = useState<string>(comment.content);

  const handleEdit = (e: any) => {
    setCommentContent(
      e.target.value
        .replace(`@${comment.replyingTo} `, "")
        .replace(`@${comment.replyingTo}`, "")
    );
  };

  return (
    <Container>
      <CommentScoreSection>{comment.score}</CommentScoreSection>
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
