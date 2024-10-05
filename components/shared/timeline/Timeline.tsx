'use client'

import {events, EventType} from "@/constants/timeline";
import {useState} from "react";
import SelectedEvent from "@/components/shared/timeline/SelectedEvent";


export default function Timeline(){
    const [selectedEvent, setSelectedEvent] = useState<EventType | null>();

    return (
        <div className="flex flex-col items-center py-10">
            <div className="flex overflow-x-auto space-x-4 py-4 px-2">
                {events.map((event) => (
                    <button
                        key={event.id}
                        onClick={() => setSelectedEvent(event)}
                        className={`px-4 py-2 border rounded-lg ${
                            selectedEvent?.id === event.id
                                ? "bg-blue-500 text-white"
                                : "bg-white border-gray-300 text-gray-800"
                        } transition duration-300 ease-in-out hover:bg-blue-400`}
                    >
                        <p className="font-semibold">{event.date}</p>
                        <p>{event.title}</p>
                    </button>
                ))}
            </div>

            {selectedEvent && (
               <SelectedEvent title={selectedEvent.title} description={selectedEvent.description} date={selectedEvent.date} />
            )}
        </div>
    )
}