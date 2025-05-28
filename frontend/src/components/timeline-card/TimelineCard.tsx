type TimelineCardProps = {
    companyName: string;
    date: string;
    location: string;
    detail: string;
    statusMission: string;
  };
  
  
  export function TimelineCard({
    companyName,
    date,
    location,
    detail,
    statusMission,
  }: TimelineCardProps) {
    return (
      <div className="bg-white/10 border border-white/20 rounded-xl p-4 w-full max-w-xl shadow-md backdrop-blur-md text-white">
        <p className="text-sm text-gray-300">{companyName}</p>
        <p className="text-lg font-bold">{new Date(date).toLocaleDateString()}</p>
        <p className="text-sm text-gray-300">{location}</p>
        <p className="mt-2">{detail}</p>
        <p
  className={`text-sm mt-1 italic ${
    statusMission === 'Success'
      ? 'text-green-400'
      : statusMission === 'Partial Failure'
      ? 'text-yellow-300'
      : statusMission === 'Failure'
      ? 'text-red-500'
      : 'text-gray-300'
  }`}
>
  {statusMission}
</p>

      </div>
    );
  }