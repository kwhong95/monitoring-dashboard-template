import styled from '@emotion/styled'

export const Title = styled('div')`
  display: flex;   
`

export const Modal = styled('div')`
  position: relative;
  width: 100%;
  max-width: 24rem;
  max-height: 70vh;
  border-radius: 16px;
  background: #101010;
  overflow: hidden;
  font-size: 16px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);

  // border-radius + overflow:hidden safari 버그로 추가(모서리 영역에서 clipping이 되지 않음)
  transform: translateZ(0);
`