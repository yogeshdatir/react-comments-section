import React, { createContext, useContext, useState } from "react";
import { IComment, IReply, Response } from "../types/commentsTypes";
import data from "../assets/data/data.json";

export interface CommentContextInterface {
  commentsData: Response | null;
  cancelReply?: (commentId: string) => void;
  addNewComment: (newComment: IComment) => void;
  addNewReply: (parentCommentId: string, newComment: IReply) => void;
  deleteComment: (commentId: string, parentCommentId?: string) => void;
}

const commentContext = createContext<CommentContextInterface | null>(null);

export default function CommentContextProvider(props: any) {
  const [commentsData, setCommentsData] = useState<Response>(data);

  const addNewComment = (newComment: IComment) => {
    setCommentsData({
      ...commentsData,
      comments: [...commentsData.comments, newComment],
    });
  };

  const addNewReply = (parentCommentId: string, newComment: IReply) => {
    let oldParentCommentIndex: number | undefined;
    let newParentComment: IComment | undefined;
    commentsData.comments.forEach((comment: IComment, index: number) => {
      const matched: boolean = comment.id === parentCommentId;
      if (matched) {
        oldParentCommentIndex = index;
        newParentComment = comment;
        return;
      }
      if (!matched) {
        const matchedInReplies: IReply | undefined = comment.replies?.find(
          (reply: IReply) => reply.id === parentCommentId
        );
        if (!matchedInReplies) return;

        oldParentCommentIndex = index;
        newParentComment = comment;
        return;
      }
    });

    if (!newParentComment) console.error("Parent Comment does not exist...");
    else {
      newParentComment?.replies?.push(newComment);

      let updatedComments = [...commentsData.comments];
      if (oldParentCommentIndex)
        updatedComments.splice(oldParentCommentIndex, 1, newParentComment);

      setCommentsData({
        ...commentsData,
        comments: [...updatedComments],
      });
    }
  };

  const deleteComment = (commentId: string, parentCommentId?: string) => {
    let comments: IComment[] = [...commentsData.comments];
    if (!parentCommentId) {
      let updatedComments: IComment[] = comments.filter(
        (comment: IComment) => comment.id !== commentId
      );
      setCommentsData({ ...commentsData, comments: updatedComments });
    } else {
      let updatedParentComment: IComment | undefined;
      let oldParentCommentId: number | undefined;
      comments.every((comment: IComment, index: number) => {
        if (comment.id !== parentCommentId) return true;
        const updatedReplies: IReply[] | undefined =
          comment.replies?.filter((reply: IReply) => reply.id !== commentId) ||
          [];
        updatedParentComment = { ...comment, replies: updatedReplies };
        oldParentCommentId = index;
        return false;
      });
      if (oldParentCommentId && updatedParentComment) {
        comments.splice(oldParentCommentId, 1, updatedParentComment);

        setCommentsData({
          ...commentsData,
          comments: [...comments],
        });
      }
    }
  };

  const CommentContextState: CommentContextInterface = {
    commentsData,
    addNewComment,
    addNewReply,
    deleteComment,
  };

  return (
    <commentContext.Provider value={CommentContextState}>
      {props.children}
    </commentContext.Provider>
  );
}

export function useCommentContext() {
  const context = useContext<CommentContextInterface | null>(commentContext);
  if (context === null) {
    throw new Error("useComment must be used within a CommentProvider");
  }
  return context;
}
