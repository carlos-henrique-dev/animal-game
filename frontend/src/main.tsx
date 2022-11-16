import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter } from 'react-router-dom'

import { ProjectSetup } from './config/project-setup'

async function setup() {
  const data = await ProjectSetup()

  const router = createBrowserRouter(
    data.map(({ route }) => ({
      path: route?.path,
      element: route?.element,
    }))
  )

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App data={{ router }} />
    </React.StrictMode>
  )
}

setup()
