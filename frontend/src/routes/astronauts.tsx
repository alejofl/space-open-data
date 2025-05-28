import { AstronautCard } from '@/components/astronaut-card/AstronautCard'
import { Spinner } from '@/components/ui/spinner'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios'
import { CircleX } from 'lucide-react'

type Astronaut = {
  id: string;
  name: string;
  status: string;
  company: string;
  imageUrl: string;
  birthDate: string;
  deathDate?: string | null;
  nationality: string;
  wikipediaUrl?: string | null;
}

export const Route = createFileRoute('/astronauts')({
  component: App,
})

function App() {
  const { data, isError, isPending } = useQuery({
    queryKey: ['astronauts'],
    queryFn: async () => (await axios.get(`${import.meta.env.VITE_FRONTEND_API_URL}/astronauts`)).data
  })

  if (isPending) {
    return (
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
        <div className="flex items-center justify-center text-xl gap-2 font-bold bg-white p-8 rounded-3xl">
          <Spinner className="size-16"/>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
        <div className="flex items-center justify-center text-red-500 text-xl gap-2 font-bold bg-white p-8 rounded-3xl">
          <CircleX className="size-8"/>
          Failed to load astronauts. Please try again later.
        </div>
      </div>
    )
  }

  console.log('Astronauts data:', data)

  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {data.map((astronaut: Astronaut) => (
        <AstronautCard
          key={astronaut.id}
          name={astronaut.name}
          company={astronaut.company}
          imageUrl={astronaut.imageUrl}
          birthDate={astronaut.birthDate === "Unknown" ? undefined : new Date(astronaut.birthDate)}
          deathDate={astronaut.deathDate ? new Date(astronaut.deathDate) : undefined}
          status={astronaut.status.toLowerCase()}
          nationality={astronaut.nationality.toLowerCase()}
          wikipediaUrl={astronaut.wikipediaUrl || undefined}
        />
      ))}
    </div>
  )
}
