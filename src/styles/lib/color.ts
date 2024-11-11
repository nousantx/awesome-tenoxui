import { DefinedValue } from '@tenoxui/core'
import { generateColors } from '@nousantx/color-generator'

export const color = {
  neutral: '#577563',
  // neutral: '#7a7258',
  primary: '#41f285',
  secondary: '#0dc82a',
  red: '#f73e3e'
}

export const colorValues: DefinedValue = generateColors({
  option: {
    format: 'object2',
    output: 'rgb-only'
    //,reverse: true
  },
  color
}) as DefinedValue
