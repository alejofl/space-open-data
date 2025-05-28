import { useState, useMemo } from 'react'
import { TimelineCard } from './TimelineCard'
import type { TimelineItem } from '@/routes/timeline'

export function TimelineGrouped({ timelineData }: { timelineData: TimelineItem[] }) {

  const groupedByYear = useMemo(() => {
    const groups: Record<number, TimelineItem[]> = {}
    timelineData.forEach((item) => {
      const year = new Date(item.date).getFullYear()
      if (!groups[year]) groups[year] = []
      groups[year].push(item)
    })

    Object.keys(groups).forEach((year) => {
      groups[Number(year)] = groups[Number(year)].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    })

    return groups
  }, [timelineData])

  const years = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a)

  const [selectedYear, setSelectedYear] = useState<number>(years[0])

  return (
    <div className="w-full px-4 text-white">
      {/* Year Dropdown */}
      <div className="pb-6 flex justify-center items-center gap-4">
        <label htmlFor="year-select" className="text-white text-lg">
          Select Year:
        </label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/30 backdrop-blur-md"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Missions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {groupedByYear[selectedYear]?.map((item) => (
          <TimelineCard
            key={item.id}
            companyName={item.company}
            date={item.date}
            location={item.location}
            detail={item.detail}
            statusMission={item.missionStatus}
          />
        ))}
      </div>
    </div>
  )
}
