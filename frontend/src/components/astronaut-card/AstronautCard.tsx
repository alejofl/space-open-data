import clsx from "clsx";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type AstronautCardProps = {
    name: string;
    company: string;
    imageUrl: string;
    birthDate: Date;
    deathDate: Date | undefined;
    status: string;
    nationality: string;
    wikipediaUrl: string | undefined;
};

export function AstronautCard({ name, company, imageUrl, birthDate, deathDate, status, nationality, wikipediaUrl }: AstronautCardProps) {
    const calculateAge = () => {
        const lastDate: Date = deathDate || new Date();
        const ageDate: Date = new Date(lastDate.getTime() - birthDate.getTime());
        const age: number = ageDate.getUTCFullYear() - 1970;
        return (age > 0) ? age : 0;
    }
    const age = calculateAge();

    const content = (
        <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl max-w-64">
            <img
                src={imageUrl}
                alt={name}
                width={600}
                height={400}
                className="size-64 object-cover"
            />
            <div className="flex flex-col gap-2 p-3">
                <h3 className="text-2xl font-semibold leading-tight">
                    <span className={clsx("mr-2 fi border", `fi-${nationality}`)} style={{width: "24px"}}></span>
                    {name}
                </h3>
                <div>
                    <p className="text-gray-500 dark:text-gray-400">{company}</p>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p className="text-gray-500 dark:text-gray-400">{`${age} years old`}</p>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p>{birthDate.toLocaleString("en-US", {dateStyle: "medium"})} {" - "} {deathDate?.toLocaleString("en-US", {dateStyle: "medium"}) || "Present"}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            <div className="w-full h-10 flex items-center justify-center uppercase font-semibold bg-gray-400">
                {status}
            </div>
        </div>
    )

    return (
        <>
            {
                wikipediaUrl
                    ? <a href={wikipediaUrl} target="_blank" rel="noopener noreferrer">{content}</a>
                    : content
            }
        </>
    );
}