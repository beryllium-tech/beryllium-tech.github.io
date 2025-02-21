import { MetaProvider } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import Layout from './components/Layout'
import './app.css'

export default function App() {
  return (
    <MetaProvider>
      <Router
        base={import.meta.env.SERVER_BASE_URL}
        root={Layout}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  )
}
