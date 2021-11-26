import styled from '@emotion/styled'

export const Title = styled('div')`
  font-weight: 700;
`

export const Body = styled('div')`
  position: relative;
  padding: 20px 30px;
  text-align: right;
  white-space: center;
  overflow-y: auto;
`

export const ItemBody = styled('div')`
  position: relative;
`

export const ItemTitle = styled('div')`
  font-weight: 500;
`

export const ItemProps = styled('div')`

`

export const Modal = styled('div')`
  position: relative;
  color: white;
  padding: 20px;
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