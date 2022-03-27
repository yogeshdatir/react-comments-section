import styled from "@emotion/styled";

const CommentFormContainer = styled.div`
  background: ${(props) => props.theme.palette.common.white};
  min-height: 144px;
  display: flex;
  flex: 1;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 8px;
`;

const CommentContentContainer = styled.div`
  width: 100%;
  display: flex;
`;

const CommentTextArea = styled.textarea`
  min-height: 100px;
  flex: 1;
  resize: none;
  box-sizing: border-box;
  padding: 12px 24px;

  background: ${(props) => props.theme.palette.common.white};
  border: ${(props) => `1px solid ${props.theme.palette.primary.dark}`};
  border-radius: 8px;

  font-family: "Rubik";
  line-height: 24px;

  color: ${(props) => props.theme.palette.secondary.dark};

  outline: none;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PrimaryButton = styled.button`
  min-width: 104px;
  height: 48px;
  border: none;
  margin-left: 16px;

  background: ${(props) => props.theme.palette.primary.dark};
  border-radius: 8px;
  cursor: pointer;

  text-transform: uppercase;
  color: ${(props) => props.theme.palette.common.white};
  font-weight: 500;

  &:hover {
    background: ${(props) => props.theme.palette.primary.light};
  }
`;

export {
  CommentFormContainer,
  CommentTextArea,
  CommentContentContainer,
  PrimaryButton,
  ActionContainer,
};
