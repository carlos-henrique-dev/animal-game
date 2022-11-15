import { PluginOption } from 'vite'
import fs from 'fs'
import { readManifests } from './read-manifests'

interface Params {
  basePath: string
  writeManifestAt: string
}
const filter = 'manifest.ts'

export default async function AppManifestBuilder(params: Params): Promise<PluginOption[]> {
  const { basePath, writeManifestAt } = params

  const manifests = await readManifests({ basePath, filter: filter })
  console.log(manifests)

  const content = `export const manifests = ` + JSON.stringify(manifests)

  fs.writeFileSync(`${writeManifestAt}/manifests.ts`, content)

  return [{ enforce: 'pre', name: 'vite-app-manifest-builder' }]
}
