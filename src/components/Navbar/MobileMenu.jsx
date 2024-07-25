import styled from "styled-components";

const navItems = ["Currency", "Items", "Accounts", "Services", "Swap", "Sell"];

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #303141;
  transform: ${(prop) =>
    prop.$isOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.4s ease-in-out;
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  & li {
    border-bottom: 1px solid #7f828d;
  }

  & li:last-child {
    border-bottom: none;
  }
`;

const ListLink = styled.a`
  text-decoration: none;
  background-color: #303141;
  padding: 1.5rem;
`;

export default function MobileMenu({ isOpen }) {
  return (
    <Container $isOpen={isOpen}>
      <List>
        {navItems.map((t, i) => (
          <li key={i}>
            <ListLink>{t}</ListLink>
          </li>
        ))}
      </List>
    </Container>
  );
}
