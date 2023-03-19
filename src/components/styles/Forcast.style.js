import styled from 'styled-components'
import { MainContent } from './WeatherCard'

export const ForecastContent = styled(MainContent)`
  background: var(--primary_light_a005);
`

export const ItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgb(255 255 255 / 70%);
  /* width: 400px; */
`

export const DescriptionContent = styled.p`
  flex: 1;
  text-transform: capitalize;
  font-size: 1.4rem;
  margin-bottom: ${({ mb }) => mb};
`

export const SubTitle = styled.h3`
  flex-basis: 15%;
  font-size: 1.8rem;
`

export const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
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
  font-weight: 600;
  color: white;
  font-size: 1.7rem;
`

export const TimeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-basis: 75px;
`

export const AccItem = styled.div`
  position:relative;
`
export const AccBox = styled.section`
  height:50px;
  overflow: hidden;
  transition: all .15s ease-in-out;
`
export const AccLabel = styled.label`
	width:100%;
  height: 50px;
	line-height: 50px;
	padding: 0 20px;
	display: inline-block;
	cursor: pointer;
  font-weight: 700;
  font-size: 1.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color:var(--text_default_light);
`

export const AccBody = styled.div`
  left: -360px;
  opacity: 0;
  position: relative;

  width: 100%;
	padding: 10px 20px;
	font-size: 11pt;
	color: rgba(0,0,0,.54);
`

export const AccIcon = styled.i`
  content: "";
  position: absolute;
  transform: translate(-6px, 0);
  top: 20px;
  right: 20px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: var(--secondary);
    width: 3px;
    height: 9px;
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
        transform: translate(2px, 0) rotate(-45deg);
        transition: .5s;
      }

      i::after{
        transform: translate(-2px, 0) rotate(45deg);
        transition: .5s;
      }
    }

    ${AccBody} {
      top: 100%;
      left: 0;
      opacity: 1;
      transition: left .5s ease-in-out, opacity .2s ease .15s;
      width: 100%;
    }
  }

  &:checked + ${AccLabel} i::before{
    transform: translate(2px, 0) rotate(-45deg);
    transition: .5s;
  }

  &:checked + ${AccLabel} i::after{
    transform: translate(-2px, 0) rotate(45deg);
    transition: .5s;
  }
`



