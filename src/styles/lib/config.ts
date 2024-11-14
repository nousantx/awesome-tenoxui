// Modified config.ts
import { useMemo } from 'react'
import type { DefinedValue } from '@tenoxui/core/full'
import { property } from './properties'
import { merge } from '@nousantx/someutils'
import { generateColors } from '@nousantx/color-generator'
import { standardAttributes, reactAttributes } from '@nousantx/list-attribute'
import { classes } from './classes'
import { breakpoints } from './breakpoints'
import { color } from './color'

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

// use `fc-` prefix before color name to use fixed color, it wont affected by dark theme or light theme changes

const fixColor = generateColors({
  option: {
    format: 'object2',
    output: 'rgb-only',
    prefix: 'fc-'
  },
  color
}) as DefinedValue

export function createConfig(isDarkMode: boolean) {
  const colorTheme = isDarkMode ? dark : light

  return useMemo(
    () => ({
      property,
      values: merge(colorTheme, fixColor, {
        red: '255 0 0',

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
