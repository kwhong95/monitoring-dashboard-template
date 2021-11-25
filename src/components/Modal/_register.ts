import Setting from './Setting'

const modals = {
  Setting
}

// this file is just used for types only.
// If other file import this register, bundle size will be increased
// do not import this except the file: @modals/types.ts
export type Modals = typeof modals