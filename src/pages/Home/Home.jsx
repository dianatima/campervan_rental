import { HomeWrap, HeroWrap, ImgWrap, Title1, Title2,HeroBtn,HeroContainer,Container } from "./Home.styled";
import hero from './hero2.jpeg';

export default function Home() {
  return (
    <HomeWrap>
      {/* <h2>Welcome to Campervan rent App</h2> */}
      {/* <img src={img1} /> */}
      <HeroWrap>
        <ImgWrap src={hero} />
        {/* <Ovarlay></Ovarlay> */}
        <HeroContainer>
        <Title1>Home is where we parked</Title1>
        {/* <HeartIcon /> */}
        <Title2></Title2>
          <HeroBtn>CAMPERVANS</HeroBtn>
          </HeroContainer>
      </HeroWrap>
      <Container>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quam et ut maiores provident, rerum, laudantium, sapiente voluptas asperiores tempore odio aut nam at nostrum natus autem ipsam nemo necessitatibus!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quam et ut maiores provident, rerum, laudantium, sapiente voluptas asperiores tempore odio aut nam at nostrum natus autem ipsam nemo necessitatibus!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quam et ut maiores provident, rerum, laudantium, sapiente voluptas asperiores tempore odio aut nam at nostrum natus autem ipsam nemo necessitatibus!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quam et ut maiores provident, rerum, laudantium, sapiente voluptas asperiores tempore odio aut nam at nostrum natus autem ipsam nemo necessitatibus!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quam et ut maiores provident, rerum, laudantium, sapiente voluptas asperiores tempore odio aut nam at nostrum natus autem ipsam nemo necessitatibus!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quam et ut maiores provident, rerum, laudantium, sapiente voluptas asperiores tempore odio aut nam at nostrum natus autem ipsam nemo necessitatibus!</p>
      <p>Lorem ipsum dolor sit, amet cons</p>
      <p>Lorem ipsum dolor sit, amet cons</p>
      <p>Lorem ipsum dolor sit, amet cons</p>
      <p>Lorem ipsum dolor sit, amet cons</p>
      <p>Lorem ipsum dolor sit, amet cons</p>
      <p>Lorem ipsum dolor sit, amet cons</p>
      v
      <p>Lorem ipsum dolor sit, amet cons</p>
      <p>Lorem ipsum dolor sit, amet cons</p>
        <p>Lorem ipsum dolor sit, amet cons</p>
        <p>Lorem ipsum dolor sit, amet cons</p>
        </Container>
      {/* <img src={img3} /> */}
    </HomeWrap>
  );
}
