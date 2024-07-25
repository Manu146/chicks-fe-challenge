import styled from "styled-components";
import ItemCard from "./ItemCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: 1.25rem;
  }
`;

export default function ItemsGrid({ items }) {
  return (
    <Container>
      {items && items.map((item, i) => <ItemCard item={item} key={i} />)}
    </Container>
  );
}
