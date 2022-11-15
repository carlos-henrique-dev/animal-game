import { ModuleManifest } from '@/interfaces'

export namespace ReadManifest {
  export interface Params {
    basePath: string
    filter: string
  }

  export interface Return {
    manifests: ModuleManifest[]
  }

  export interface ReadFromDirectoryParams {
    basePath: string
    filter: string
    manifests?: ModuleManifest[]
  }

  export interface ReadFromDirectoryReturn {
    manifests: ModuleManifest[]
  }

  export interface ReadFileParams {
    filePath: string
  }

  export interface ReadFileReturn {
    manifest: ModuleManifest
  }
}
