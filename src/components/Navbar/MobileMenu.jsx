import styled from "styled-components";
import Button from "../ui/Button";

const navItems = ["Currency", "Items", "Accounts", "Services", "Swap", "Sell"];

const Container = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #303141;
  transform: ${(prop) =>
    prop.$isOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.4s ease-in-out;
  z-index: 10;
`;

const List = styled.ul`
  list-style: none;
  width: 100vw;
  & li {
    border-bottom: 1px solid #7f828d;
    padding: 1rem;
  }

  & li:last-child {
    border-bottom: none;
  }
`;

const ListLink = styled.a`
  text-decoration: none;
  background-color: #303141;
  color: white;
  padding: 1rem;
`;

const CloseBtn = styled(Button)`
  background-color: transparent;
  color: white;
  margin-left: auto;
  & span {
    font-size: 2rem;
  }
`;

export default function MobileMenu({ isOpen, toggleOpen }) {
  return (
    <Container $isOpen={isOpen}>
      <CloseBtn onClick={toggleOpen}>
        <span className="material-symbols-outlined">close</span>
      </CloseBtn>
      <List>
        {navItems.map((t, i) => (
          <li key={i}>
            <ListLink href="#">{t}</ListLink>
          </li>
        ))}
      </List>
    </Container>
  );
}
