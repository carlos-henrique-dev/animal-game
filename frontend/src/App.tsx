import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App({ data }: { data: any }) {
  return <RouterProvider router={data.router} />
}

export default App
