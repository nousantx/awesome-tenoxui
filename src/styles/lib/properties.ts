import type { Property } from '@tenoxui/core'
import { property as txProps } from '@tenoxui/property'
import { createProperty } from '@nousantx/someutils'

export const property: Property = {
  ...txProps,
  ...createProperty(
    {
      bg: 'backgroundColor',
      text: 'color',
      'bdr-c': 'borderColor'
    },
    'rgb({0} / var(--{1}-opacity, 1))'
  ),
  'shadow-c': '--shadow-color',
  'bg-opacity': '--bg-opacity',
  bgc: 'backgroundColor'
}
