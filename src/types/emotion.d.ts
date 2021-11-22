import '@emotion/react'

declare module '@emotion/react' {
  interface Theme {
    colors: Colors
  }
}

interface Colors {
  bgColor: string
  fontColor: string
}