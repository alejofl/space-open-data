export const launchStatuses = {
    "in flight": {
        "abbrev": "In Flight",
        "description": "The launch vehicle has lifted off from the launchpad.",
        "color": "bg-yellow-500",
    },
    "deployed": {
        "abbrev": "Deployed",
        "description": "Deployment of the payload(s) has been confirmed.",
        "color": "bg-green-500",
    },
    "tbc": {
        "abbrev": "TBC",
        "description": "Awaiting official confirmation - current date is known with some certainty.",
        "color": "bg-yellow-500",
    },
    "go": {
        "abbrev": "Go",
        "description": "Current T-0 confirmed by official or reliable sources.",
        "color": "bg-green-500",
    },
    "success": {
        "abbrev": "Success",
        "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
        "color": "bg-green-500",
    },
    "failure": {
        "abbrev": "Failure",
        "description": "Either the launch vehicle did not reach orbit, or the payload(s) failed to separate.",
        "color": "bg-red-500",
    },
    "hold": {
        "abbrev": "Hold",
        "description": "The countdown has been paused, but the launch can still happen within the launch window.",
        "color": "bg-yellow-500",
    },
    "partial failure": {
        "abbrev": "Partial Failure",
        "description": "Either the launch vehicle reached orbit but did not deliver its payload in the targeted orbit, or an exceptional event made it impossible to consider the mission a success.",
        "color": "bg-red-500",
    },
    "tbd": {
        "abbrev": "TBD",
        "description": "Current date is a placeholder or rough estimation based on unreliable or interpreted sources.",
        "color": "bg-yellow-500",
    }
}
