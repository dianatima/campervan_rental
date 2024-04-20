import styled from '@emotion/styled';
import { ReactComponent as Heart } from "../../images/svg/heart.svg";

export const HeroContainer = styled.div`
width: 1440px;
margin-left: auto;
margin-right: auto;
position: absolute;
top: 0%;
left: 50%;
transform: translate(-50%,0);
`;

export const Container = styled.div`
width: 1440px;
margin-left: auto;
margin-right: auto;
`;

export const HomeWrap = styled.div`
/* width: 1440px; */
margin-left: auto;
margin-right: auto;
padding-top: 80px;
`;

export const HeroWrap = styled.div`
height: 844px;
width: 100%;
margin-left: auto;
margin-right: auto;
position: relative;
`;

export const ImgWrap = styled.img`
/* width: 1440px; */
width: 100%;
display: block;
object-fit: cover;
object-position: center;
`; 

export const Title1 = styled.h1`
position: absolute;
z-index: 10;
top: 80px;
right: 0px;
font-size: 82px;
color: #372e2e;
`;

export const Title2 = styled.h1`
position: absolute;
z-index: 10;
top: 120px;
right: 150px;
font-size: 72px;
/* color: var(--button-color); */
`;

export const TitleAccent = styled.span`
color: var(--button-color);
font-size: 92px;
`;

export const HeartIcon = styled(Heart)`
  stroke: var(--button-color);
  position: absolute;
    z-index: 10;
    top: 150px;
    right: 75px;
    width: 20px;
    height: 20px;
    `;

export const Ovarlay = styled.div`
height:723px;
width: 100%;
margin-left: auto;
margin-right: auto;
margin-left: auto;
margin-right: auto;
background-color: #32acea;
/* background-color: #fff; */
position: absolute;
top: 0;
left: 0;
opacity:0.1;
`;

export const HeroBtn = styled.button`
position: absolute;
z-index: 10;
top: 280px;
right: 0px;
padding: 15px 40px;
border-radius: 200px;
background-color: var(--button-color);
font-size: 22px;
line-height: 1.5;
outline: none;
color: #eee6e6;
width: 300px;
font-weight: 500;
/* opacity: 0.9; */

&:hover {
    background: var(--button-hover-color);
  }
`;