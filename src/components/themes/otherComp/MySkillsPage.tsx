import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from '../Themes';



import LogoComponent from '../otherComp/SocialIcons';
import SocialIcons from '../otherComp/SocialIcons';
import PowerButton from '../PowerButton';
import ParticleComponent from  '../otherComp/SocialIcons';
import BigTitle from '../BigTitle';
import { JSX } from 'react/jsx-runtime';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`
const Develope = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => { 
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="laptop-code"
        className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        {...props}
      >
        <path
           fill={props.fill}
          d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
        />
      </svg>
    )
}
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>

<Description>
I am  backend developer 
</Description>
<Description>
<strong>I like to develope</strong>
<ul>
    <li>
        WebSite
    </li>
    <li>
        Web app
    </li>
</ul>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>
       Intelij
    </li>
    <li>Sts</li>
    
</ul>
</Description>

            </Main>
            <Main>
            <Title>
    <Develope width={40} height={40} /> Frontend Developer
</Title>
<Description>
I Love to create Website unique Frontend i'm creating, thus i enjoy bringing new ideas to life.
</Description>
<Description>
<strong>Skills</strong>
<p>
Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
VScode, Github, Codepen etc.
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" left={''} />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
