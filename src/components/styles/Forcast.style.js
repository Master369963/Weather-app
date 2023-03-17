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

