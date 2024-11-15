import { Classes } from '@tenoxui/core'
import { merge, transformClasses } from '@nousantx/someutils'

const utilityFirst = {
  display: {
    flex: 'flex'
  },
  boxShadow: {
    'shadow-sm': '0 1px 2px 0 rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.05))',
    shadow:
      '0 1px 3px 0 rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1)), 0 1px 2px -1px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1))',
    'shadow-md':
      '0 4px 6px -1px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1)), 0 2px 4px -2px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1))',
    'shadow-lg':
      '0 10px 15px -3px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1)), 0 4px 6px -4px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1))',
    'shadow-xl':
      '0 20px 25px -5px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1)), 0 8px 10px -6px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1))',
    'shadow-2xl': '0 25px 50px -12px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.25))',
    'shadow-inner': 'inset 0 2px 4px 0 rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.05))',
    'shadow-none': '0 0 #0000'
  }
}

const utilityClass = transformClasses({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const classes = merge(utilityFirst, utilityClass) as Classes
