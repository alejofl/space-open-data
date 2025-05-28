import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import { TimelineGrouped } from '@/components/timeline-card/TimelineGrouped'

type Mission = {
  'Company Name': string
  Datum: string
  Location: string
  Detail: string
  'Status Mission': string
}

type TimelineItem = {
  companyName: string
  date: string
  location: string
  detail: string
  statusMission: string
}

export const Route = createFileRoute('/timeline')({
  component: TimelinePage,
})

function TimelinePage() {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([])

  useEffect(() => {
    fetch('/Space_Corrected.csv')
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse<Mission>(csv, {
          header: true,
          skipEmptyLines: true,
        })

        const mapped: TimelineItem[] = parsed.data.map((m) => ({
          companyName: m['Company Name'],
          date: m.Datum,
          location: m.Location,
          detail: m.Detail,
          statusMission: m['Status Mission'],
        }))

        const sorted = mapped.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )

        setTimelineData(sorted)
      })
  }, [])

  return (
    <div className="flex flex-col items-center gap-6 py-10 px-4">
      <TimelineGrouped timelineData={timelineData} />
    </div>
  )
}
