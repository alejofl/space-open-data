import axios from 'axios';
import { createFileRoute } from '@tanstack/react-router'
import {LaunchCard} from "@/components/launch-card/LaunchCard.tsx";
import { useQuery } from '@tanstack/react-query';
import type { launchStatuses } from '@/data/launch-status';
import { Spinner } from '@/components/ui/spinner';
import { CircleX } from 'lucide-react';

type Launch = {
  id: string;
  name: string;
  status: string;
  launchDate: string;
  imageUrl: string;
  company: string;
}

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { data, isError, isPending } = useQuery({
    queryKey: ['launches'],
    queryFn: async () => (await axios.get(`${import.meta.env.VITE_FRONTEND_API_URL}/launches`)).data
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
          Failed to load launches. Please try again later.
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {data.map((launch: Launch) => (
        <LaunchCard
          key={launch.id}
          title={launch.name}
          company={launch.company}
          imageUrl={launch.imageUrl}
          launchDate={new Date(launch.launchDate)}
          status={launch.status.toLowerCase() as keyof typeof launchStatuses}
        />
      ))}
    </div>
  )
}
