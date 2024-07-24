import styled from "styled-components";
import { useState, useEffect } from "react";

const InputContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  background-color: #373e54;
  padding: 0 0.5rem 0 0.25rem;
`;

const Input = styled.input.attrs({ type: "number" })`
  background-color: #373e54;
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
`;

const BtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ArrowBtn = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    color: #39e29d;
  }

  & span {
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
