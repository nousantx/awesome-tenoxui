// Modified styler.ts
import { useLayoutEffect } from 'react'
import { use, tenoxui, applyStyles } from 'tenoxui'
import { MakeTenoxUI } from '@tenoxui/core'
import { globalStyles } from './lib/global'
import { createConfig } from './lib/config'
import { color, colorValues } from './lib/color'
import { useTheme } from '../contexts/ThemeProvider'

export function styler() {
  const { isDarkMode } = useTheme()
  const config = createConfig(isDarkMode)

  useLayoutEffect(() => {
    use(config)
    // applyStyles(globalStyles)
    tenoxui({ customEngine: MakeTenoxUI })
  }, [config, color, colorValues, isDarkMode])

  return config
}
