import styled from "@emotion/styled";

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
`;

export { CommentsContainer, ReplyContainer, ReplyTimeline };
