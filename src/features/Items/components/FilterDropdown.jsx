import styled from "styled-components";
import Button from "../../../components/ui/Button";

const ArrowIcon = styled.span`
  position: absolute;
  top: calc(50% - 10px);
  right: 1rem;
  transform: rotate(0);
  font-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
`;

const CosmeticIcon = styled.span`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

const Container = styled.div`
  font-size: 1rem;
  border-radius: ${(props) =>
    props.$first ? "4px 0 0 4px" : props.$second ? "0 4px 4px 0" : "4px"};
  border-right: ${(props) => (props.$first ? "1px solid #4c6085" : "none")};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  background-color: rgba(78, 86, 119, 0.3);

  & ul {
    list-style: none;
    flex-direction: column;
    & :not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    }
    & > li {
      color: white;
      flex-grow: 1;
    }

    & ${Button} {
      background-color: transparent;
      padding: 0.75rem 1.25rem;
      border-radius: 0;
      font-weight: 500;
      text-transform: capitalize;
      width: 100%;
    }
    & ${Button}:hover {
      background-color: #46506c;
    }
  }

  & span {
    color: white;
  }

  & > ul,
  & > div {
    padding: 0.5rem;
    display: none;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #303141;
    border-radius: 0 0 4px 4px;
    z-index: 4;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  &:hover {
    background-color: rgba(76, 96, 133, 0.3);
  }

  &:hover > ul,
  &:hover > div,
  &:focus-within > ul,
  &:focus-within > div,
  &:active > ul,
  &:active > div {
    display: flex;
  }

  &:hover ${ArrowIcon}, &:focus ${ArrowIcon} {
    transform: rotate(180deg);
  }

  @media (min-width: 1200px) {
    border-radius: ${(props) =>
      props.$first ? "0" : props.$second ? "0 4px 4px 0" : "4px"};
  }
`;

const PriceInput = styled.input.attrs({ type: "number" })`
  background-color: #373e54;
  color: white;
  padding: 0.125rem 0.75rem;
  border-radius: 4px;
  border: none;
  height: 2rem;
  font-size: 1rem;
  max-width: 40%;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }
`;

const PricesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
`;

const FilterLabel = styled.span`
  position: absolute;
  left: 3rem;
  top: 8px;
  font-size: 0.5rem;
  color: hsla(0, 0%, 100%, 0.75);
  font-weight: 400;
`;

const SortContainer = styled(Container)`
  & ${CosmeticIcon} > span {
    color: #39e29d;
  }
  background-color: #323648;
  flex: 0 0 auto;
  padding-right: 3rem;

  &:hover {
    background-color: #42485f;
  }
`;

const handleChangeFn = (e, cb) => cb(e.target.value);

export default function FilterDropdown({ type, opts, setStateFn, value }) {
  if (type === "price")
    return (
      <Container $first>
        <FilterLabel>Price</FilterLabel>
        <CosmeticIcon>
          <img src="/feather.svg" alt="" />
        </CosmeticIcon>
        <span>{`$${value[0]} - $${value[1]}`}</span>
        <PricesContainer>
          <PriceInput
            onChange={(e) => handleChangeFn(e, setStateFn[0])}
            value={value[0]}
          />
          <span>-</span>
          <PriceInput
            onChange={(e) => handleChangeFn(e, setStateFn[1])}
            value={value[1]}
          />
        </PricesContainer>
        <ArrowIcon className="material-symbols-outlined">
          arrow_drop_down
        </ArrowIcon>
      </Container>
    );
  if (type === "type")
    return (
      <Container $second>
        <FilterLabel>Item Type</FilterLabel>
        <CosmeticIcon>
          <img src="/bag.svg" alt="" />
        </CosmeticIcon>
        <span>{value}</span>
        <ul>
          {opts &&
            opts
              .filter((o) => o !== value)
              .map((o, i) => (
                <li key={i}>
                  <Button onClick={() => setStateFn(o)}>{o}</Button>
                </li>
              ))}
        </ul>
        <ArrowIcon className="material-symbols-outlined">
          arrow_drop_down
        </ArrowIcon>
      </Container>
    );

  if (type === "game")
    return (
      <Container>
        <FilterLabel>Select a game</FilterLabel>
        <CosmeticIcon>
          <img src="/sword.png" alt="" />
        </CosmeticIcon>
        <span>{value}</span>
        <ul>
          {opts &&
            opts
              .filter((o) => o !== value)
              .map((o, i) => (
                <li key={i}>
                  <Button onClick={() => setStateFn(o)}>{o}</Button>
                </li>
              ))}
        </ul>
        <ArrowIcon className="material-symbols-outlined">
          arrow_drop_down
        </ArrowIcon>
      </Container>
    );

  if (type === "sort")
    return (
      <SortContainer>
        <FilterLabel>Sort by</FilterLabel>
        <CosmeticIcon>
          <span className="material-symbols-outlined">tune</span>
        </CosmeticIcon>
        <span>{value}</span>
        <ul>
          {opts &&
            opts
              .filter((o) => o !== value)
              .map((o, i) => (
                <li key={i}>
                  <Button onClick={() => setStateFn(o)}>{o}</Button>
                </li>
              ))}
        </ul>
        <ArrowIcon className="material-symbols-outlined">
          arrow_drop_down
        </ArrowIcon>
      </SortContainer>
    );
}
