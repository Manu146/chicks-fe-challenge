import styled from "styled-components";

const Container = styled.span`
  font-size: 1rem;
  color: #cacaca;
`;
export default function ItemsCount({ total, count }) {
  return <Container>{`Showing ${count} from ${total}`}</Container>;
}
