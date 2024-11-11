import type { Property } from '@tenoxui/core'
import { property as txProps } from '@tenoxui/property'
import { createProperty } from '@nousantx/someutils'

export const property: Property = {
  ...txProps,
  ...createProperty(
    {
      bg: 'backgroundColor',
      text: 'color',
      shadow: '--shadow-color',
      'bdr-c': 'borderColor'
    },
    'rgb({0} / var(--{1}-opacity, 1))'
  ),

  'bw-b': 'borderBottomWidth',
  'bg-opacity': '--bg-opacity',
  'text-opacity': '--text-opacity',
  rotate: {
    property: 'transform',
    value: 'rotate({0})'
  },
  'back-blur': {
    property: 'backdropFilter',
    value: 'blur({0})'
  }
}
