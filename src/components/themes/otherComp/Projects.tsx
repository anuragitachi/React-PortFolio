import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "../Themes";
import { motion } from "framer-motion";

import LogoComponent from "../otherComp/LogoComp";
import PowerButton from '../PowerButton';
import Fire from '../../assets/—Pngtree—ying yang_12158275.png';
import SocialIcons from '../otherComp/SocialIcons';
import { YinYang } from "./styleDesgin";
import { MyProjectData } from "./MyProjectData";
import Card from "./Card";

const Box = styled.div`
  background-color: #F1F4D3;

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.div)<React.HTMLProps<HTMLDivElement>>`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const yinyang = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
        if (element !== null) {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
        }
        if (yinyang.current !== null) {
      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
      }
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show"> 
          {MyProjectData.map((d) => (
            <Card key={d.id} data={d} />
          ))}
         </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80}  />
        </Rotate>

        {/* <BigTitlte text="WORK" top="10%" right="20%" /> */}
      </Box>
    </ThemeProvider>
  );
};

export default Projects;
