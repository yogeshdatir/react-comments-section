import React from "react";
import ReactDom from "react-dom";
import {
  CancelButton,
  DangerButton,
  DeleteActionContainer,
  Heading,
  Message,
  ModalContent,
  ModalOverlay,
} from "./DeleteCommentModal.styled";

type Props = {
  open: boolean;
  setOpen: any;
  data: {
    commentId: string;
    parentCommentId: string | undefined;
    deleteComment: any;
  };
};

const modalRoot = document.querySelector("#portal") as HTMLElement;
const DeleteCommentModal = ({ open, setOpen, data }: Props) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <ModalOverlay>
        <ModalContent>
          <Heading>Delete comment</Heading>
          <Message>
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
          </Message>
          <DeleteActionContainer>
            <CancelButton
              onClick={() => {
                setOpen(false);
              }}
            >
              cancel
            </CancelButton>
            <DangerButton
              onClick={() => {
                data.deleteComment(data.commentId, data.parentCommentId);
                setOpen(false);
              }}
            >
              delete
            </DangerButton>
          </DeleteActionContainer>
        </ModalContent>
      </ModalOverlay>
    </>,
    modalRoot
  );
};

export default DeleteCommentModal;
