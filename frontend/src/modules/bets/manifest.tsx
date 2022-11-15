import { ModuleManifest } from '@/interfaces'
import { Bet } from './bet'

const manifest: ModuleManifest = {
  name: '@bets',
  isPrivate: false,
  route: {
    path: '/bet',
    element: <Bet />,
  },
}

export default manifest
