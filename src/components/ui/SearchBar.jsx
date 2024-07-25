import styled from "styled-components";
//import {useState} from 'react';

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0.5rem;
  background-color: rgba(78, 86, 119, 0.3);

  & input {
    background-color: transparent;
    border: none;
    color: white;
    flex: 1;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }

  & button {
    border: none;
    background-color: transparent;
    color: #d0d2d7;
    padding: 0.5rem;
    cursor: pointer;
  }

  & > span {
    color: #d0d2d7;
    padding: 0.5rem;
  }

  &:hover,
  &:focus-within {
    background-color: rgba(76, 96, 133, 0.3);
  }

  @media (min-width: 1200px) {
    border-radius: 4px 0 0 4px;
  }
`;

export default function SearchBar({ searchValue, setSearchFn }) {
  return (
    <Container>
      <span className="material-symbols-outlined">search</span>
      <input
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchFn(e.target.value)}
      />
      {searchValue !== "" && (
        <button onClick={() => setSearchFn("")}>
          <span className="material-symbols-outlined">close</span>
        </button>
      )}
    </Container>
  );
}
