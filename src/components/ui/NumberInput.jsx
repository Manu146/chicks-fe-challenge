import styled from "styled-components";
import { useState, useEffect } from "react";

const InputContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    background-color: #373e54;
    padding: 0 0.5rem 0 0.25rem;

    &:hover,
    &:focus-within {
      background-color: #46506c;
      & input {
        background-color: #46506c;
      }
    }
  }
`;

const Input = styled.input.attrs({ type: "number" })`
  background-color: transparent;
  color: white;
  padding: 0.125rem 0.75rem;
  border: none;
  width: 3.75rem;
  height: 3rem;
  font-size: 0.875rem;
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

  @media (min-width: 768px) {
    background-color: #373e54;
  }
`;

const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 0;
  }
`;

const ArrowBtn = styled.button`
  background-color: #2a2ac0;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  &:hover {
    color: #39e29d;
  }

  @media (min-width: 768px) {
    background-color: transparent;
    border-radius: 0;
    padding: 0;
    flex-direction: column;
    justify-content: center;
  }
`;

export default function NumberInput({ maxN, minN }) {
  const [n, setN] = useState(minN);
  useEffect(() => {
    if (n < minN) return setN(1);
    if (n > maxN) return setN(maxN);
  }, [n, maxN, minN]);

  return (
    <InputContainer>
      <Input
        value={n}
        onKeyDown={(e) => {
          if (e.key === "." || e.key === "-") e.preventDefault();
        }}
        onInput={(e) => setN(e.target.value)}
      />
      <BtnsContainer>
        <ArrowBtn
          onClick={() => {
            if (n + 1 < maxN) return setN((prevN) => prevN + 1);
            return;
          }}
        >
          <span className="material-symbols-outlined">arrow_drop_up</span>
        </ArrowBtn>
        <ArrowBtn
          onClick={() => {
            if (n - 1 > 0) setN((prevN) => prevN - 1);
            return;
          }}
        >
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </ArrowBtn>
      </BtnsContainer>
    </InputContainer>
  );
}
