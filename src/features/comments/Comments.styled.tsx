import styled from "@emotion/styled";
import { CustomBreakpoints } from "../../utils/themes/breakpoints";

const CommentsContainer = styled.div`
  /* background-color: ${(props) => props.theme.palette.background}; */
  max-width: 100%;
`;

const ReplyContainer = styled.div`
  display: flex;
`;

const ReplyTimeline = styled.div`
  width: 2px;
  margin: 0 43px;
  background: ${(props) => props.theme.palette.gray.dark};

  ${CustomBreakpoints.mobile} {
    margin: 0;
    margin-right: 16px;
  }
`;

export { CommentsContainer, ReplyContainer, ReplyTimeline };
