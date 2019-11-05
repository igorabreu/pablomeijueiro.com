import styled from "styled-components"

export const HomeWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: ${props => props.theme.color.darkBlue};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:  ${props => props.theme.functions.responsive(38, 40)};
  box-sizing: border-box;
`
export const IconMenu = styled.img`
  position: relative;
  max-height: ${props => props.theme.functions.responsive(34, 37)};
  cursor: pointer;
  max-width: 40px;
`

export const LeftBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
`

export const RightBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: flex-end;
`

export const RedCircle = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${props => props.theme.color.redOrange};
  border-radius: 50%;
`

export const RedSquare = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${props => props.theme.color.redOrange};
`

export const MiddleBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.div`
  color: ${props => props.theme.color.pearlLusta};
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${props => props.theme.functions.responsive(16, 32)};
  &:hover {
    opacity: 0.8;
  }
`

export const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:  ${props => props.theme.functions.responsive(34, 37)};
`
