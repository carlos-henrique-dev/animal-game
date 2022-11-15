import { ModuleManifest } from '@/interfaces'
import { Login } from './login'

const manifest: ModuleManifest = {
  name: '@auth',
  isPrivate: false,
  route: {
    path: '/',
    element: <Login />,
  },
}

export default manifest
