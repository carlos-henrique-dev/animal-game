import { manifests } from '../manifests'

export const ProjectSetup = async () => {
  console.log('Starting project setup...')

  return console.log(manifests.manifests)
}
