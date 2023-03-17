import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary_01);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FlexCenterBox = styled.div`
  display: flex;
  align-items:center;
  gap: 0.5rem;
  gap: ${({ gap }) => gap};
`

export const FlexColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  gap: 0.5rem;
`

export const Card = styled.div`
  background: var(--primary_01);
  padding: 3rem 2rem 0 2rem;
  min-width: 360px;
`

export const ImgCaption = styled.div`
  font-size: 1.3rem;
  text-align: center;
`
export const GeneralContent = styled.p`
  font-size: 1.6rem;
  margin-bottom: ${({ mb }) => mb};
  text-transform: capitalize;
`

export const StrongContent = styled(GeneralContent)`
  color: var(--secondary);
`