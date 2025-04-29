import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/timeline')({
  component: App,
})

function App() {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      <h1 className="text-4xl font-bold mb-4">TIMELINE</h1>
    </div>
  )
}
