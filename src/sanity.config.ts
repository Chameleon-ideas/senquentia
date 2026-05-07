import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

export default defineConfig({
  projectId: 'egq490jl',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: structure
    })
  ],
  schema: {
    types: schemaTypes,
  },
})
