import styled from "styled-components";
import Button from "../../../components/ui/Button";
import NumberInput from "../../../components/ui/NumberInput";

const Container = styled.div`
  aspect-ratio: 2/3;
  flex: 1;
  padding: 1.25rem;
  background-color: #323648;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const Labels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  align-self: flex-end;
  gap: 0.5rem;
`;

const SaleLabel = styled.span`
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  margin-left: 0.5rem;

  &::before {
    content: "";
    width: 0.25rem;
    height: 0.25rem;
    position: absolute;
    left: -0.5rem;
    top: calc(50% - 0.125rem);
    background-color: #39e29d;
    border-radius: 50%;
  }
`;

const StockLabel = styled.span`
  padding: 0.125rem 0.375rem;
  background-color: transparent;
  border: 1px solid ${(props) => (props.isOnStock ? "#39e29d" : "#e23939")};
  border-radius: 4px;
  font-size: 0.5rem;
  font-weight: 400;
  color: ${(props) => (props.isOnStock ? "#39e29d" : "#e23939")};
  justify-self: flex-end;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h4 {
    font-size: 1.125rem;
    color: white;
    font-weight: 700;
    max-width: 60%;
  }
`;

const PriceLabel = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: ${(props) => (props.isOnSale ? "300" : "800")};
  text-decoration: ${(props) =>
    props.isOnSale ? "line-through solid #fd4a4a" : "none"};
  margin-right: ${(props) => (props.isOnSale ? "0" : "1rem")};
`;

const ItemDescription = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 300;
`;

const Footer = styled.div`
  padding-top: 1rem;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

const AddToCarBtn = styled(Button)`
  background-color: #5762d5;
  & div {
    background-color: #454da8;
    border-radius: 4px;
    padding: 0.5rem;
    padding-bottom: 5.5px;
    margin-left: 0.25rem;
  }

  &:hover {
    background-color: #5b62af;
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
    background-color: #5b62af;
  }

  &:disabled:hover {
    background-color: #5b62af;
  }
`;

const DetailsBtn = styled(Button)`
  background-color: #3f4355;
  color: #9597a0;
  &:hover {
    background-color: #464b62;
  }
`;

const ImageContainer = styled.div`
  border-radius: 6px;
  border: 1px solid #9b9da6;
  overflow: hidden;
  align-self: flex-start;
  & img {
    width: 4rem;
    height: auto;
    display: block;
  }
`;

const GameLabel = styled.div`
  padding: 0.125rem 0.5rem;
  border-radius: 1rem;
  background-color: transparent;
  border: 2px solid #39e29d;
  color: #39e29d;
  font-weight: 800;
  font-size: 0.75rem;
`;

export default function ItemCard({ item }) {
  const isOnSale = !!item?.salePrice;
  const stockAvailable = item.stock > 0;
  return (
    <Container>
      <Header>
        <Labels>
          {isOnSale && <SaleLabel>On Sale</SaleLabel>}
          <StockLabel isOnStock={stockAvailable}>
            {stockAvailable ? "In stock" : "Out of stock"}
          </StockLabel>
        </Labels>
        <NumberInput maxN={item.stock} minN={item.stock > 0 ? 1 : 0} />
      </Header>
      <Content>
        <ImageContainer>
          <img src={item.img} alt="" />
        </ImageContainer>
        <Title>
          <h4>{item.name}</h4>
          <GameLabel>LoL</GameLabel>
        </Title>
        <div>
          {isOnSale && (
            <PriceLabel isOnSale={!isOnSale}>{`$${(
              Math.round(item.salePrice * 100) / 100
            ).toFixed(2)}`}</PriceLabel>
          )}
          <PriceLabel isOnSale={isOnSale}>{`$${(
            Math.round(item.price * 100) / 100
          ).toFixed(2)}`}</PriceLabel>
        </div>
        <ItemDescription>{item.description}</ItemDescription>
      </Content>
      <Footer>
        <DetailsBtn>Details</DetailsBtn>
        <AddToCarBtn disabled={!stockAvailable}>
          Add
          <div>
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </AddToCarBtn>
      </Footer>
    </Container>
  );
}
