import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/astronauts')({
  component: App,
})

// Inspo: https://go4liftoff.com/astronauts

function App() {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      <h1 className="text-4xl font-bold mb-4">ASTRONAUTS</h1>
    </div>
  )
}
