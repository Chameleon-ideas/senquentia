import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  projectId: 'egq490jl',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool()
  ],
  schema: {
    types: schemaTypes,
  },
})
