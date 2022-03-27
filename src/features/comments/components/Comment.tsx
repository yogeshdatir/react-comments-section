import { useState } from "react";
import { useCommentContext } from "../../../contexts/commentContext";
import { IComment_Reply } from "../../../types/commentsTypes";
import { ReactComponent as PlusIcon } from "../../../assets/images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../../../assets/images/icon-minus.svg";
import { ReactComponent as EditIcon } from "../../../assets/images/icon-edit.svg";
import { ReactComponent as ReplyIcon } from "../../../assets/images/icon-reply.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/images/icon-delete.svg";

import {
  CommentAction,
  CommentContent,
  CommentDetailsSection,
  CommentHeader,
  CommentMobileAction,
  CommentScoreSection,
  Container,
  EditActionContainer,
  ResponsiveContainer,
  TransparentButton,
  TransparentDangerButton,
  UserAvatar,
  YouTag,
} from "./Comment.styled";
import { CommentTextArea, PrimaryButton } from "./CommentForm.styled";

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
      <ResponsiveContainer>
        <CommentScoreSection>
          <PlusIcon onClick={() => handleAddScore(comment.id)} />
          <p>{comment.score}</p>
          <MinusIcon
            style={{ height: "2.5px", width: "10px", fill: "red" }}
            onClick={() => handleSubtractScore(comment.id)}
          />
        </CommentScoreSection>
        <CommentMobileAction>
          {comment.user.username !== commentsData?.currentUser.username ? (
            <TransparentButton onClick={() => addReply(comment.id)}>
              <ReplyIcon />
              reply
            </TransparentButton>
          ) : !edit ? (
            <div style={{ display: "flex" }}>
              <TransparentDangerButton
                onClick={() => {
                  deleteComment(comment.id, parentCommentId);
                }}
              >
                <DeleteIcon />
                delete
              </TransparentDangerButton>
              <TransparentButton onClick={() => setEdit(true)}>
                <EditIcon /> edit
              </TransparentButton>
            </div>
          ) : null}
        </CommentMobileAction>
      </ResponsiveContainer>
      <CommentDetailsSection>
        <CommentHeader>
          <UserAvatar
            src={require(`../../../assets${comment.user.image.png}`)}
            alt="profile"
          />
          <span className="username">{comment.user.username}</span>
          {comment.user.username === commentsData?.currentUser.username && (
            <YouTag>you</YouTag>
          )}
          <span className="createdAt">{comment.createdAt}</span>
          <CommentAction>
            {comment.user.username !== commentsData?.currentUser.username ? (
              <TransparentButton onClick={() => addReply(comment.id)}>
                <ReplyIcon />
                reply
              </TransparentButton>
            ) : !edit ? (
              <div style={{ display: "flex" }}>
                <TransparentDangerButton
                  onClick={() => {
                    deleteComment(comment.id, parentCommentId);
                  }}
                  style={{ paddingRight: "24px" }}
                >
                  <DeleteIcon />
                  delete
                </TransparentDangerButton>
                <TransparentButton onClick={() => setEdit(true)}>
                  <EditIcon /> edit
                </TransparentButton>
              </div>
            ) : null}
          </CommentAction>
        </CommentHeader>
        {!edit ? (
          <CommentContent>
            {comment.replyingTo ? (
              <>
                <span>@{comment.replyingTo}</span> {comment.content}
              </>
            ) : (
              comment.content
            )}
          </CommentContent>
        ) : (
          <>
            <CommentTextArea
              value={
                comment.replyingTo
                  ? `@${comment.replyingTo} ${commentContent}`
                  : commentContent || ""
              }
              onChange={handleEdit}
            />
            <EditActionContainer>
              <PrimaryButton
                onClick={() => {
                  updateComment({ ...comment, content: commentContent });
                  setEdit(false);
                }}
              >
                Update
              </PrimaryButton>
              <PrimaryButton onClick={() => setEdit(false)}>
                cancel
              </PrimaryButton>
            </EditActionContainer>
          </>
        )}
      </CommentDetailsSection>
    </Container>
  );
};

export default Comment;
