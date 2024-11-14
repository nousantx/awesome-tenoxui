// Modified styler.ts
import { useLayoutEffect } from 'react'
import { MakeTenoxUI } from '@tenoxui/core/full'
import { globalStyles } from './lib/global'
import { createConfig } from './lib/config'
import { useTheme } from '../contexts/ThemeProvider'

export function styler() {
  const { isDarkMode } = useTheme()
  const config = createConfig(isDarkMode)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('child', globalStyles)

    const elements = document.querySelectorAll('*:not(#ignore *, .tx-ignore)')

    elements.forEach(element => {
      const tenoxui = new MakeTenoxUI({ element: element as HTMLElement, ...config })
      tenoxui.useDOM()
    })
  }, [config, isDarkMode])

  return config
}
