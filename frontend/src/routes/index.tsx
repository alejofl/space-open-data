import { createFileRoute } from '@tanstack/react-router'
import {LaunchCard} from "@/components/launch-card/LaunchCard.tsx";

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      <LaunchCard
        title={'Prueba Lanzamiento'}
        company={'SpaceX'}
        imageUrl={'https://thespacedevs-prod.nyc3.digitaloceanspaces.com/media/images/eris_on_the_lau_image_20250227073032.jpg'}
        launchDate={new Date("2025-04-30")}
        status={'tbd'}
      />
    </div>
  )
}
