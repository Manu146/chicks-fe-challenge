import styled from "styled-components";

const Image = styled.div`
  height: 100vh;
  width: 100%;
  background: url("/bg-wallpaper.jpg") no-repeat center;
  background-size: cover;
  background-position: bottom;
`;

const BgBlur = styled.div`
  background-color: rgba(61, 62, 83, 0.5);
  backdrop-filter: blur(4px);
  height: inherit;
`;

export default function BgImage({ children }) {
  return (
    <Image>
      <BgBlur>{children}</BgBlur>
    </Image>
  );
}
