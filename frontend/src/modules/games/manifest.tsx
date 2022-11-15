import { ModuleManifest } from '@/interfaces'
import { Games } from './game'

export const manifest: ModuleManifest = {
  name: '@games',
  isPrivate: false,
  route: {
    path: '/games',
    element: <Games />,
  },
}
