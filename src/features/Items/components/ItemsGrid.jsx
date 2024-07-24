import styled from "styled-components";
import ItemCard from "./ItemCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1rem;
`;

export default function ItemsGrid({ items }) {
  return (
    <Container>
      {items && items.map((item, i) => <ItemCard item={item} key={i} />)}
    </Container>
  );
}
