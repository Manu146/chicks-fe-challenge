import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MainContainer from "./components/layout/MainContainer";
import Items from "./features/Items";
import BgImage from "./components/layout/BgImage";
import Footer from "./components/Footer/Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  body{
    background-color: #37384b;
  }


  .material-symbols-outlined {
    font-size: 16px;
    font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
  }

`;

const toggleOpen = (fn) => fn((prevOpenState) => !prevOpenState);

function App() {
  const [isOpen, setIsOpen] = useState(false); //Mobile menu state

  return (
    <BgImage>
      <GlobalStyle />
      <Navbar toggleOpen={() => toggleOpen(setIsOpen)} isOpen={isOpen} />
      <MainContainer>
        <h1>Condimentum consectetur</h1>
        <Items></Items>
      </MainContainer>
      <Footer></Footer>
    </BgImage>
  );
}

export default App;
