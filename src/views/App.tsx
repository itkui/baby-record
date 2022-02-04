import { useLocation, useRoutes } from 'solid-app-router'
import { routes } from "@/routers"

export default () => {
  const Route = useRoutes(routes)

  return <div>

    <main>
      <Route />
    </main>
  </div>
}