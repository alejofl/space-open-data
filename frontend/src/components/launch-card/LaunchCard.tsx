import clsx from "clsx";
import { TMinusCounter } from "./TMinusCounter";
import { launchStatuses } from "@/data/launch-status";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

type LaunchCardProps = {
    title: string;
    company: string;
    imageUrl: string;
    launchDate: Date;
    status: keyof typeof launchStatuses;
};

export function LaunchCard({title, company, imageUrl, launchDate, status}: LaunchCardProps) {
    return (
        <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl max-w-sm">
            <img
                src={imageUrl}
                alt={title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="flex flex-col gap-2 p-3">
                <div>
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{company}</p>
                </div>
                <TMinusCounter targetTime={launchDate}/>
            </div>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className={clsx("w-full h-10 flex items-center justify-center uppercase font-semibold", launchStatuses[status].color)}>
                        {launchStatuses[status].abbrev}
                    </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="w-64" sideOffset={-16}>
                    <p>{launchStatuses[status].description}</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            
        </div>
    );
}