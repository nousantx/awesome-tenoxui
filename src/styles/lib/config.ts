// Modified config.ts
import { useMemo } from 'react'
import { property } from './properties'
import { merge } from '@nousantx/someutils'
import { generateColors } from '@nousantx/color-generator'
import { color, colorValues } from './color'
import { classes } from './classes'
import { breakpoints } from './breakpoints'

const dark = generateColors({
  option: {
    format: 'object2',
    output: 'rgb-only',
    reverse: true
  },
  color
})

const light = generateColors({
  option: {
    format: 'object2',
    output: 'rgb-only'
  },
  color
})

export function createConfig(isDarkMode: boolean) {
  return useMemo(
    () => ({
      property,
      values: merge(isDarkMode ? dark : light, {
        full: '100%',
        family: {
          code: 'JetBrains Mono, monospace',
          sans: 'Inter, sans-serif'
        }
      }),
      classes,
      breakpoints
    }),
    [isDarkMode, colorValues, property, classes, color]
  )
}
