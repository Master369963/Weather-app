import styled from 'styled-components'
import { MainContent } from './WeatherCard'
import { customMedia } from './GlobalStyle.style'

export const ForecastContent = styled(MainContent)`
  background: var(--primary_light_a005);
`

export const ItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  border-bottom: 1px solid rgb(255 255 255 / 70%);
  /* width: 400px; */
`

export const DescriptionContent = styled.p`
  flex: 2;
  margin-bottom: ${({ mb }) => mb};
  text-transform: capitalize;
  font-size: 1.4rem;
`

export const SubTitle = styled.h3`
  flex-basis: 15%;
  font-size: 1.8rem;
`

export const ForecastWrapper = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.5rem;
`

export const ForcastImg = styled.div`
  position: relative;
  top: -10px;

  img {
    position: relative;
    top: 10px;
    width: 50px;
    height: 50px;
  }
`

export const BoldContent = styled.p`
  color: white;
  font-weight: 600;
  font-size: 1.7rem;
`

export const TimeBox = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 75px;
  gap: 0.5rem;

  ${customMedia.lessThan("mobile")`
    flex-basis: 65px;

    svg{
      width:20px;
      height:20px;
    }
  `}
`

export const AccItem = styled.div`
  position:relative;
  z-index: 0;
`
export const AccBox = styled.section`
  overflow: hidden;
  height:50px;
  transition: all .15s ease-in-out;
`
export const AccLabel = styled.label`
  display: inline-block;
	padding: 0 20px;
  width:100%;
  height: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color:var(--text_default_light);
  font-weight: 700;
  font-size: 1.8rem;
	line-height: 50px;
	cursor: pointer;
`

export const AccBody = styled.div`
  display: none;
  padding: 1rem 2rem;
  width: 100%;
  color: rgba(0,0,0,.54);
  font-size: 11pt;
  opacity: 0;

  ${customMedia.lessThan("mobile")`
    padding: 1rem 0.5rem;
  `}
`

export const AccIcon = styled.i`
  position: absolute;
  top: 20px;
  right: 20px;
  content: "";
  transform: translate(-6px, 0);

  &::before,
  &::after {
    position: absolute;
    width: 3px;
    height: 9px;
    background-color: var(--secondary);
    content: "";
  }

  &::before {
    transform: translate(-2px, 0) rotate(-45deg);
  }

  &::after {
    transform: translate(2px, 0) rotate(45deg);
  }
`
export const AccInput = styled.input`
  display:none;

  &:checked + ${AccBox} {
    position: relative;
    height: auto;
    /* box-shadow: 0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32); */

    ${AccLabel} {
    	border-bottom: 1px solid rgba(0,0,0,.18);
      background: rgba(255, 255, 255, 0.3);
      color:var(--text_strong);

      i::before{
        transition: .5s;
        transform: translate(2px, 0) rotate(-45deg);
      }

      i::after{
        transition: .5s;
        transform: translate(-2px, 0) rotate(45deg);
      }
    }

    ${AccBody} {
      display: block;
      width: 100%;
      opacity: 1;
      transition: left .5s ease-in-out, opacity .2s ease .15s;
    }
  }

  &:checked + ${AccLabel} i::before{
    transition: .5s;
    transform: translate(2px, 0) rotate(-45deg);
  }

  &:checked + ${AccLabel} i::after{
    transition: .5s;
    transform: translate(-2px, 0) rotate(45deg);
  }
`



