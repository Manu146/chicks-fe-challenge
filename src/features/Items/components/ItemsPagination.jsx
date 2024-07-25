import styled from "styled-components";
import Button from "../../../components/ui/Button";

const ArrowBtn = styled(Button)`
  border: 2px solid #5762d5;
  color: white;
  background-color: transparent;
  &:hover {
    background-color: #5762d5;
  }
  transition: background 0.2s ease-in;
`;

const PageBtn = styled(Button)`
  background-color: ${(props) =>
    props.$isCurrPage ? "#5762d5" : "transparent"};
  color: white;
  &:hover {
    background-color: ${(props) => (props.$isCurrPage ? "#5762d5" : "#4b4f7a")};
  }

  transition: background 0.2s ease-in;
`;

const Dots = styled.span`
  font-size: 1rem;
  color: white;
  padding: 0 1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
`;

export default function ItemsPagination({ currentPage, nOfPages }) {
  if (nOfPages > 3)
    return (
      <Container>
        <ArrowBtn>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </ArrowBtn>
        {[...Array(4)].map((_, i) => {
          if (i + 1 !== currentPage)
            return <PageBtn key={i + 1}>{i + 1}</PageBtn>;
          return (
            <PageBtn key={i + 1} $isCurrPage>
              {i + 1}
            </PageBtn>
          );
        })}
        <Dots>...</Dots>
        <PageBtn key={nOfPages}>{nOfPages}</PageBtn>
        <ArrowBtn>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </ArrowBtn>
      </Container>
    );
  return (
    <Container>
      <ArrowBtn>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </ArrowBtn>
      {[...Array(4)].map((_, i) => {
        if (i + 1 !== currentPage)
          return <PageBtn key={i + 1}>{i + 1}</PageBtn>;
        return (
          <PageBtn key={i + 1} $isCurrPage>
            {i + 1}
          </PageBtn>
        );
      })}
      <ArrowBtn>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </ArrowBtn>
    </Container>
  );
}
