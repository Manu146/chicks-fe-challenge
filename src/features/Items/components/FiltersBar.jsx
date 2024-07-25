import styled from "styled-components";

const FiltersBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  & > div {
    display: flex;
    flex: 1;
  }

  & > div:first-child {
    margin-right: 0;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 0;
    & > div:first-child {
      margin-right: 1rem;
    }
  }
`;

export default FiltersBar;
