import styled from "styled-components";
import ChicksLogo from "../../assets/chicks-logo.svg?react";

const Header = styled.div`
  background-color: #2b2c3b;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & div {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;

    & > img {
      height: 3rem;
    }

    & span {
      color: rgba(255, 255, 255, 0.75);
      font-weight: 600;
    }
  }
`;

const Container = styled.footer`
  border-top: 2px solid #2f3141;
  background-color: #303141;
`;

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Socials = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid #4c6085;
  margin-bottom: 2rem;
  gap: 0.5rem;
  & a {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #5762d5;
    & img {
      width: 100%;
      height: auto;
    }
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  & > ul {
    list-style: none;
    & h5 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: white;
    }

    & li {
      margin-bottom: 0.75rem;
      & a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.75);
        font-weight: 300;
        font-size: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const CopyrightInfo = styled.div`
  text-align: center;
  color: white;
  font-size: 0.75rem;
  margin-top: 6rem;
  padding-bottom: 1.5rem;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & span {
    font-weight: 600;
    color: white;
  }
`;

const Reviews = styled.div`
  display: flex;

  & a {
    color: rgba(255, 255, 255, 0.75);
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    margin-left: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }

  & span {
    color: #39e29d;
    font-size: 1.5rem;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Header>
        <div>
          <img src="/cards.png" alt="" />
          <img src="/btc.png" alt="" />
          <span>and 50+ more</span>
        </div>
      </Header>
      <Content>
        <Socials>
          <a href="#">
            <img src="/x.png" alt="" />
          </a>
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/discord.png" alt="" />
          </a>
        </Socials>
        <Links>
          <Logo>
            <a href="#">
              <ChicksLogo />
            </a>
            <span>support@chicksgold.com</span>
          </Logo>
          <ul>
            <h5>Chicks Gold</h5>
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
          <ul>
            <h5>Support</h5>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <ul>
            <h5>Legal</h5>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Copyright Policy</a>
            </li>
          </ul>
          <Reviews>
            <span className="material-symbols-outlined">stars</span>
            <span className="material-symbols-outlined">stars</span>
            <span className="material-symbols-outlined">stars</span>
            <span className="material-symbols-outlined">stars</span>
            <span className="material-symbols-outlined">stars</span>
            <a href="#">Trustpilot Reviews</a>
          </Reviews>
        </Links>
        <CopyrightInfo>
          © 2017- 2020 ChicksGold.com. All Rights Reserved.
        </CopyrightInfo>
      </Content>
    </Container>
  );
}
