import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ProjectSetup } from './config/project-setup'

const setup = await ProjectSetup()

const router = createBrowserRouter(
  setup.map(({ route }) => ({
    path: route?.path,
    element: route?.element,
  }))
)

function App() {
  return <RouterProvider router={router} />
}

export default App
