import styled from '@emotion/styled'

const dimmedBackground = (color: boolean | string) => {
  if (!color) return 'none'
  if (typeof color === 'boolean') return 'rgba(0, 0, 0, 0.6)'
  return color
}

export const OVERLAY = 1000

export const Overlay = styled('div')<{ dim: boolean | string, visible: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${OVERLAY};

  background: ${(props) => props.dim && dimmedBackground(props.dim)};

  // animation
  opacity: 0;
  pointer-events: none;
  transition-property: opacity;
  ${(props) => props.visible && {
    opacity: 1,
    pointerEvents: 'initial',
  }} 
`