import styled from "@emotion/styled";
import { PrimaryButton } from "./CommentForm.styled";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.palette.common.white};
  z-index: 1000;
  border-radius: 8px;
  padding: 32px;
`;

const Heading = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin: 1rem 0;
  color: ${(props) => props.theme.palette.secondary.dark};
`;

const Message = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.palette.secondary.dark};
`;

const DeleteActionContainer = styled.div`
  margin-left: auto;
  width: max-content;
`;

const CancelButton = styled(PrimaryButton)`
  background-color: ${(props) => props.theme.palette.secondary.light};
  margin-left: 0;

  :hover {
    background-color: ${(props) => props.theme.palette.secondary.dark};
  }
`;

const DangerButton = styled(PrimaryButton)`
  background-color: ${(props) => props.theme.palette.danger.dark};

  :hover {
    background-color: ${(props) => props.theme.palette.danger.light};
  }
`;

export {
  ModalOverlay,
  ModalContent,
  CancelButton,
  DangerButton,
  Heading,
  Message,
  DeleteActionContainer,
};
