import { AstronautCard } from '@/components/astronaut-card/AstronautCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/astronauts')({
  component: App,
})

function App() {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      <AstronautCard
        name={'Prueba Astronauta'}
        company={'SpaceX'}
        imageUrl={'https://thespacedevs-prod.nyc3.digitaloceanspaces.com/media/images/alan2520g.2520poindexter_image_20190426143719.jpeg'}
        birthDate={new Date("2004-05-30")}
        deathDate={undefined}
        status={'tbd'}
        nationality='us'
        wikipediaUrl={'https://en.wikipedia.org/wiki/Alan_Poindexter'}
      />
    </div>
  )
}
