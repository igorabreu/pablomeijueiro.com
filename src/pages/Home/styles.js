import styled from "styled-components"

export const HomeWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: ${props => props.theme.color.darkBlue};
`
export const IconMenu = styled.img`
  position: relative;
  max-height: 50px;
  cursor: pointer;
`

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  padding: 30px;
  box-sizing: border-box;
  top: 0;
`

export const BottomBar = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  padding: 30px;
  box-sizing: border-box;
  bottom: 0;
`
