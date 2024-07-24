import styled from "styled-components";
import ChicksLogo from "../assets/chicks-logo.svg?react";

const leftNavItems = [
  "Currency",
  "Items",
  "Accounts",
  "Services",
  "Swap",
  "Sell",
];

const Container = styled.nav`
  background-color: #303141;
  border-bottom: 2px solid #4c6085;
  min-height: 4.5rem;

  & > div {
    padding: 0 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 768px) {
    & > div {
      padding: 0 1.5rem 0 0.25rem;
    }
  }
`;

const Navigation = styled.ul`
  display: none;
  flex-direction: row;
  list-style: none;

  & li {
    display: flex;
    align-items: center;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  @media (min-width: 1024px) {
    gap: 1rem;
  }
`;

const Logo = styled.div`
  padding: 0 2rem 0 1rem;
  border-right: 1px solid hsla(0, 0%, 100%, 0.3);
  margin-right: 1rem;

  & svg {
    margin-bottom: 12px;
  }
`;

const Dropdown = styled.li`
  background-color: #303141;
  position: relative;
  display: none;

  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: #39e29d;
    right: 0;
    bottom: 0;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.2s ease-in-out;
  }

  & a {
    padding: 1.5rem;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    & span {
      transform: rotateX(0deg);
      transition: transform 0.3s ease-in;
    }
  }

  &:hover {
    background-color: #393a4e;

    &::after {
      transform: scaleY(1);
      transform-origin: bottom;
    }

    & a {
      color: #39e29d;
    }
    & span {
      transform: rotateX(180deg);
    }
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: #39e29d;
  color: #303141;
  border-radius: 5px;

  & span {
    margin-left: 0.75rem;
  }

  &:hover {
    background-color: #29a673;
  }
`;

const BurguerMenuBtn = styled(Button)`
  padding: 1.5rem;
  display: block;
  color: #7f828d;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export default function Navbar() {
  return (
    <Container>
      <div>
        <LeftContainer>
          <BurguerMenuBtn>
            <span className="material-symbols-outlined">menu</span>
          </BurguerMenuBtn>
          <Logo>
            <a href="#">
              <ChicksLogo />
            </a>
          </Logo>
        </LeftContainer>
        <RightContainer>
          <Navigation>
            {leftNavItems.map((item, i) => (
              <Dropdown key={i}>
                <a href="">
                  {item}
                  <span className="material-symbols-outlined">
                    {"keyboard_arrow_down"}
                  </span>
                </a>
              </Dropdown>
            ))}
          </Navigation>
          <FlexContainer>
            <Navigation>
              <Dropdown>
                <a href="">
                  Usd
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </a>
              </Dropdown>
              <li>
                <Button>
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                  Cart
                </Button>
              </li>
            </Navigation>
            <PrimaryButton>
              Sign In
              <span className="material-symbols-outlined">person</span>
            </PrimaryButton>
          </FlexContainer>
        </RightContainer>
      </div>
    </Container>
  );
}
