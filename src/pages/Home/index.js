import React from "react"
import iconLeftTop from "../../assets/images/icon1.svg"
import iconRightTop from "../../assets/images/icon2.svg"
import iconLeftBottom from "../../assets/images/icon3.svg"
import iconRightBottom from "../../assets/images/icon4.svg"
import {
  HomeWrapper,
  IconMenu,
  LeftBar,
  RightBar,
  RedCircle,
  MiddleBar,
  Text,
  RedSquare,
  CircleContainer
} from "./styles"

const Home = () => {
  return (
    <HomeWrapper>
      <LeftBar>
        <IconMenu src={iconLeftTop} />
        <Text>Som</Text>
        <RedCircle />
        <Text>Sobre</Text>
        <IconMenu src={iconLeftBottom} />
      </LeftBar>
      <MiddleBar>
        <CircleContainer>
          <RedCircle />
        </CircleContainer>
        <Text>Imagem</Text>
        <RedSquare />
        <Text>Caderno</Text>
        <CircleContainer>
          <RedCircle />
        </CircleContainer>
      </MiddleBar>
      <RightBar>
        <IconMenu src={iconRightTop} />
        <Text>Palavra</Text>
        <RedCircle />
        <Text>Loja</Text>
        <IconMenu src={iconRightBottom} />
      </RightBar>
    </HomeWrapper>
  )
}

export default Home
