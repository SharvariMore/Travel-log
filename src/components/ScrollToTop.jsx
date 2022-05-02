import React, {useState} from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png";

export default function ScrollToTop() {
    const [scrollState, setScrollState] = useState(false);
    {/*scroll to top when clicked on logo at bottom*/}
    const toTop = () => {
        window.scrollTo({top: 0});
    };

    {/*display logo scrolled down & hide when scrolled up */}
    window.addEventListener("scroll", () => {
        window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
      });
    return (
    <>
        <ToTop scrollState={scrollState} onClick={toTop}>
            <img src={logo} alt="" />
        </ToTop>
    </>
    );
    
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 1rem;
  right: 2rem;
  img {
    height: 1.5rem;
  }
  border-radius: 2rem;
  background-color: #1900ff39;
  padding: 1rem;
`;


