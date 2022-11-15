import { ModuleManifest } from '@/interfaces'

export const ProjectSetup = async () => {
  const modules = import.meta.glob('../../modules/*/manifest.tsx')
  const manifests: ModuleManifest[] = []

  for (const path in modules) {
    const module: any = await modules[path]()

    manifests.push(module.manifest ? module.manifest : module.default)
  }

  return manifests
}
