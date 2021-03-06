import styled from "@emotion/styled";
import { CustomBreakpoints } from "../../../utils/themes/breakpoints";

const Container = styled.div`
  background-color: ${(props) => props.theme.palette.common.white};
  padding: 24px;
  display: flex;
  margin-bottom: 20px;
  border-radius: 8px;

  ${CustomBreakpoints.mobile} {
    flex-direction: column-reverse;
    padding: 16px;
  }
`;

const CommentScoreSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 12px 5px;
  min-width: 40px;
  height: 100px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.palette.gray.dark};

  svg {
    cursor: pointer;
    path {
      fill: ${(props) => props.theme.palette.primary.light};
      &:hover {
        fill: ${(props) => props.theme.palette.primary.dark};
      }
    }
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    /* Moderate Blue */

    color: ${(props) => props.theme.palette.primary.dark};
  }

  ${CustomBreakpoints.mobile} {
    flex-direction: row;
    height: auto;
    width: 100px;
  }
`;

const CommentDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  width: 100%;

  ${CustomBreakpoints.mobile} {
    padding-left: 0;
    padding-bottom: 16px;
  }
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 18px;

  span.username {
    margin-right: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.palette.secondary.dark};
  }

  span.createdAt {
    margin-right: 16px;
    color: ${(props) => props.theme.palette.secondary.light};

    ${CustomBreakpoints.mobile} {
      margin-right: 0;
    }
  }
`;

const CommentAction = styled.div`
  margin-left: auto;

  ${CustomBreakpoints.mobile} {
    display: none;
  }
`;

const CommentMobileAction = styled.div`
  margin-left: auto;

  ${CustomBreakpoints.desktop} {
    display: none;
  }
`;

const ResponsiveContainer = styled.div`
  ${CustomBreakpoints.mobile} {
    display: flex;
    align-items: center;
  }
`;

const UserAvatar = styled.img`
  margin-right: 16px;
  width: 32px;
  height: 32px;
`;

const CommentContent = styled.p`
  span {
    font-weight: 600;
    color: ${(props) => props.theme.palette.primary.dark};
  }
`;

const EditActionContainer = styled.div`
  display: flex;
  padding-top: 16px;
  justify-content: flex-end;
`;

const TransparentButton = styled.button`
  display: flex;
  background: transparent;
  align-items: baseline;
  text-transform: capitalize;
  border: none;
  font-weight: 600;
  color: ${(props) => props.theme.palette.primary.dark};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.palette.primary.light};

    path {
      fill: ${(props) => props.theme.palette.primary.light};
    }
  }

  svg {
    padding-right: 8px;

    path {
      fill: ${(props) => props.theme.palette.primary.dark};
    }
  }
`;

const TransparentDangerButton = styled(TransparentButton)`
  color: ${(props) => props.theme.palette.danger.dark};
  padding-right: 24px;

  ${CustomBreakpoints.mobile} {
    padding-right: 10px;
  }

  &:hover {
    color: ${(props) => props.theme.palette.danger.light};
    path {
      fill: ${(props) => props.theme.palette.danger.light};
    }
  }

  svg {
    path {
      fill: ${(props) => props.theme.palette.danger.dark};
    }
  }
`;

const YouTag = styled.span`
  margin-right: 16px;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;

  color: ${(props) => props.theme.palette.common.white};
  background: ${(props) => props.theme.palette.primary.dark};
  border-radius: 2px;
  padding: 1px 6px;
`;

export {
  Container,
  CommentScoreSection,
  CommentDetailsSection,
  CommentHeader,
  UserAvatar,
  CommentAction,
  ResponsiveContainer,
  CommentMobileAction,
  CommentContent,
  TransparentButton,
  TransparentDangerButton,
  EditActionContainer,
  YouTag,
};
