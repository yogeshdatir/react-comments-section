import React, { createContext, useContext, useState } from "react";
import { IComment, IReply } from "../types/commentsTypes";

export interface CommentContextInterface {
  cancelReply?: (commentId: number) => void;
  addNewComment: (newComment: IComment) => void;
  addNewReply: (parentCommentId: number, newComment: IReply) => void;
}

const commentContext = createContext<CommentContextInterface | null>(null);

export default function BookContextProvider(props: any) {
  // const BookContextState: CommentContextInterface = {
  // };

  return (
    <commentContext.Provider value={null}>
      {props.children}
    </commentContext.Provider>
  );
}

export function useBook() {
  const context = useContext<CommentContextInterface | null>(commentContext);
  if (context === null) {
    throw new Error("useComment must be used within a CommentProvider");
  }
  return context;
}
