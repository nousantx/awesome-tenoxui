// Modified config.ts
import { useMemo } from 'react'
import type { DefinedValue } from '@tenoxui/core/full'
import { property } from './properties'
import { merge } from '@nousantx/someutils'
import { generateColors } from '@nousantx/color-generator'
import { standardAttributes, reactAttributes } from '@nousantx/list-attribute'
import { classes } from './classes'
import { breakpoints } from './breakpoints'

const color = {
  neutral: '#577563',
  // neutral: '#7a7258',
  primary: '#41f285',
  secondary: '#0dc82a',
  red: '#f73e3e'
}

const dark = generateColors({
  option: {
    format: 'object2',
    output: 'rgb-only',
    reverse: true
  },
  color
}) as DefinedValue

const light = generateColors({
  option: {
    format: 'object2',
    output: 'rgb-only'
  },
  color
}) as DefinedValue

export function createConfig(isDarkMode: boolean) {
  const colorTheme = isDarkMode ? dark : light

  return useMemo(
    () => ({
      property,
      values: merge(colorTheme, {
        full: '100%',
        family: {
          code: 'JetBrains Mono, monospace',
          sans: 'Inter, sans-serif'
        }
      }),
      classes,
      breakpoints,
      attributify: true,
      attributifyIgnore: [...standardAttributes, ...reactAttributes]
    }),
    [isDarkMode, property, classes, color, colorTheme]
  )
}
