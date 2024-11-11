import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'
import path from 'node:path'

import { DefinedValue } from '@tenoxui/core'
import { generateColors } from '@nousantx/color-generator'

export const color = {
  // neutral: '#737373',
  neutral: '#7a7258',
  primary: '#f2ca41',
  secondary: '#0dc82a'
}

export const colorValues: DefinedValue = {
  ...(generateColors({
    option: {
      format: 'object2',
      output: 'rgb-only'
      //,reverse: true
    },
    color
  }) as DefinedValue)
}
console.log(colorValues)
export default defineConfig({
  plugins: [
    react(),
    generouted({
      output: './src/routes/router.ts'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@style': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styler': path.resolve(__dirname, './src/styles/index.ts'),
      '@ui': path.resolve(__dirname, './src/components/ui')
    }
  }
})
