import styled from "@emotion/styled";
import { CustomBreakpoints } from "./utils/themes/breakpoints";

const MainContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 10px;
  background: ${(props) => props.theme.palette.background};
  p,
  span {
    font-size: ${(props) => props.theme.typography.body.fontSize};
    line-height: ${(props) => props.theme.typography.body.lineHeight};
  }
  p {
    margin: 0;
  }

  ${CustomBreakpoints.mobile} {
    padding: 32px 16px;
  }
`;

export { MainContainer };
