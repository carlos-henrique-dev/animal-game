import { ModuleManifest } from '@/interfaces'
import fs from 'fs'
import path from 'path'
import tsImport from 'ts-import'

import { ReadManifest } from './interfaces'

function importManifest(params: ReadManifest.ReadFileParams): ReadManifest.ReadFileReturn {
  const { filePath } = params
  const importedFile: { default?: ModuleManifest; manifest?: ModuleManifest } = tsImport.loadSync(filePath)

  if (importedFile.default) {
    return { manifest: importedFile.default }
  }

  if (!importedFile.manifest) {
    throw new Error('The manifest file must either be a `default export` or export a `manifest object. File with error => ' + filePath)
  }

  return { manifest: importedFile.manifest }
}

async function readFromDirectory(params: ReadManifest.ReadFromDirectoryParams): Promise<ReadManifest.ReadFromDirectoryReturn> {
  const { basePath, filter, manifests = [] } = params

  const files = fs.readdirSync(basePath)

  for (const file of files) {
    const filePath = path.join(basePath, file)
    const fileStatus = fs.lstatSync(filePath)

    if (fileStatus.isDirectory()) {
      readFromDirectory({ basePath: filePath, filter, manifests })
    }

    if (path.basename(filePath) === filter) {
      const { manifest } = importManifest({ filePath })
      console.log(`Found module ${manifest.name} manifest`)

      manifests.push(manifest)
    }
  }

  return { manifests }
}

export const readManifests = async (params: ReadManifest.Params) => {
  console.log('Reading manifest files...')

  const { basePath, filter } = params

  if (!fs.existsSync(basePath)) {
    throw new Error(`No directory or file found for this start path => ${basePath}`)
  }

  const result = await readFromDirectory({ basePath, filter })

  return result
}
