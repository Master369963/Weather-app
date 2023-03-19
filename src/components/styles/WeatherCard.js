import styled, { css, keyframes } from "styled-components";
import { customMedia } from './GlobalStyle.style'

export const FlexSBBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const MainContent = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: var(--primary_light_a03);
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const Location = styled.h2`
  color: var(--text_strong);
  font-size: 2.8rem;
`

export const CurrentWeather = styled(FlexSBBox)`
  margin: 0 0 1rem 0;
`

export const Temperature = styled.div`
  position: relative;
  color: var(--text_strong);
  font-size: 7rem;

  span {
    position: relative;
    bottom: 25px;
    color: var(--secondary);
    font-size: 3.5rem;
  }
`

export const Image = styled.div`
  width:100px;
  height:100px;

  img {
    border-radius: 50%;
    background: var(--img_bg);
  }
`

export const InfoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;

  span {
    font-size: 1.5rem;
  }

  ${customMedia.lessThan("mobile")`
    flex-wrap: wrap;
  `}
`

export const InfoBox = styled.div`
    flex: 1;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: var(--primary_light_a005);
    border-radius: 10px;

    ${customMedia.lessThan("mobile")`
      svg {
        height:20px;
        height:20px;
      }
    `}
`

export const UpdateBox = styled.div`
  display: flex;
  align-items:center;
  justify-content: flex-end;
  margin-left:auto;
  margin-top: 2rem;

  span {
    font-size: 1.4rem;
    margin-right:0.5rem;
  }

  ${customMedia.lessThan("mobile")`
    margin-top: 1rem;
  `}
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Button = styled.button`
  display:flex;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: transform .2s ease;
  transform-origin: center;

  svg {
    font-size: 2rem;
    transition: transform .1s ease;
  }
  path {
    fill:${(props) => props.$disabled ? null : 'var(--secondary)'};
  }

  &:hover svg {
  transform: scale(1.15);
}
  &:active {
  transform: translateY(2px);
}
  /* animation: ${(props) => props.$loading === true ? css`${rotate360} 1s ease infinite` : ''}; */
  ${(props) => props.$loading &&
    css`
      animation: ${rotate360} 1s linear Infinite;
    `}

  ${(props) => props.$disabled &&
    css`
      pointer-events: none;
    `}
`
export const BtnCaption = styled.p`
  margin-top: 0.5rem;
  font-size: 1.3rem;
  color: var(--primary_light_a03);
  text-align: right;
  ${(props) => props.$disabled ?
    css`
  visibility: visible;
  `:
    css`
  visibility: hidden;
  `}
`