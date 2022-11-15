// import { MenuSettings } from './menu'
// import { Permissions } from './permissions'
import { RouteSettings } from './routes'

export interface ModuleManifest {
  name: `@${string}`
  isPrivate?: boolean
  //   permissions?: Permissions[]
  route?: RouteSettings
  //   menu: MenuSettings
}
