import styled from "@emotion/styled";

const Container = styled.div`
  background-color: ${(props) => props.theme.palette.common.white};
  padding: 24px;
  display: flex;
  margin-bottom: 20px;
`;

const CommentScoreSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

const CommentDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
`;

const CommentHeader = styled.div`
  display: flex;
  padding-bottom: 18px;
`;

const CommentContent = styled.p``;

export {
  Container,
  CommentScoreSection,
  CommentDetailsSection,
  CommentHeader,
  CommentContent,
};
