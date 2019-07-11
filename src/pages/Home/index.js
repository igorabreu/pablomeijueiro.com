import React from "react"
import iconLeftTop from "../../assets/images/icon1.svg"
import iconRightTop from "../../assets/images/icon2.svg"
import iconLeftBottom from "../../assets/images/icon3.svg"
import iconRightBottom from "../../assets/images/icon4.svg"
import { HomeWrapper, IconMenu, TopBar, BottomBar } from "./styles"

const Home = () => {
  return (
    <HomeWrapper>
      <TopBar>
        <IconMenu src={iconLeftTop} />
        <IconMenu src={iconRightTop} />
      </TopBar>
      <BottomBar>
        <IconMenu src={iconLeftBottom} />
        <IconMenu src={iconRightBottom} />
      </BottomBar>
    </HomeWrapper>
  )
}

export default Home
