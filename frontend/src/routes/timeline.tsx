import { createFileRoute } from '@tanstack/react-router'
import { TimelineGrouped } from '@/components/timeline-card/TimelineGrouped'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Spinner } from '@/components/ui/spinner'
import { CircleX } from 'lucide-react'

export type TimelineItem = {
  id: string,
  company: string,
  location: string,
  date: string,
  detail: string,
  missionStatus: string,
  rocketStatus: string,
  rocketPrice?: number,
}

export const Route = createFileRoute('/timeline')({
  component: App,
})

function App() {
  const { data, isError, isPending } = useQuery({
    queryKey: ['missions'],
    queryFn: async () => (await axios.get(`${import.meta.env.VITE_FRONTEND_API_URL}/missions`)).data
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
          Failed to load missions. Please try again later.
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-6 px-4">
      <TimelineGrouped timelineData={data} />
    </div>
  )
}
