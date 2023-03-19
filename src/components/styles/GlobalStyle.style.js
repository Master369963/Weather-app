import styled from "styled-components";
import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
  desktop: "78em", //1248px
  tablet: "60em",  //960px
  mobile: "46em",  //736px
})


export const Container = styled.div`
  padding:2rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: var(--primary_01);

  ${customMedia.lessThan("mobile")`
    flex-direction: column;
    align-items:center;
  `}
`

export const FlexCenterBox = styled.div`
  display: flex;
  align-items:center;
  gap: ${({ gap }) => gap || '0.5rem'};
`

export const FlexColumnBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.5rem;
`

export const Card = styled.div`
  padding: 3rem 2rem;
  max-width:420px;
  width: 420px;
  background: var(--primary_01);

   ${customMedia.lessThan("mobile")`
    padding: 1rem 1.5rem;
    width:100%;
  `}
`

export const StickyCard = styled(Card)`
  position:sticky;
  top: 2rem;

  ${customMedia.lessThan("mobile")`
    position: unset;
  `}
`

export const ImgCaption = styled.div`
  text-align: center;
  font-size: 1.3rem;
`
export const GeneralContent = styled.p`
  margin-bottom: ${({ mb }) => mb};
  text-transform: capitalize;
  font-size: 1.6rem;
`

export const StrongContent = styled(GeneralContent)`
  color: var(--secondary);
`