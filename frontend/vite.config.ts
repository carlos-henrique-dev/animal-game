import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import * as path from 'path'

import AppManifestBuilder from './src/plugins/vite-app-manifest-builder'

export default defineConfig({
  plugins: [
    Inspect(),
    AppManifestBuilder({
      basePath: './src',
      writeManifestAt: `./src/config`,
    }),
    react(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
