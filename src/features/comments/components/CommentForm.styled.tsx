import styled from "@emotion/styled";
import { CustomBreakpoints } from "../../../utils/themes/breakpoints";

const CommentFormContainer = styled.div`
  background: ${(props) => props.theme.palette.common.white};
  min-height: 144px;
  display: flex;
  flex: 1;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 8px;

  ${CustomBreakpoints.mobile} {
    flex-direction: column-reverse;
    padding: 16px;
  }
`;

const CommentContentContainer = styled.div`
  width: 100%;
  display: flex;

  ${CustomBreakpoints.mobile} {
    padding-bottom: 16px;
  }
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

  ::-webkit-scrollbar {
    border-radius: 8px;
    width: 8px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;

const ResponsiveContainer = styled.div`
  ${CustomBreakpoints.mobile} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${CustomBreakpoints.mobile} {
    display: none;
  }
`;

const MobileActionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${CustomBreakpoints.desktop} {
    display: none;
  }
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
  ResponsiveContainer,
  MobileActionContainer,
};
