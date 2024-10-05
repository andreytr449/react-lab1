'use client'

import {useState} from "react";
import {MapType, regions} from "@/constants/map";
import SelectedRegion from "@/components/shared/map/SelectedRegion";




export default function UkraineMap(){
    const [selectedRegion, setSelectedRegion] = useState<MapType | null>(null);

    return (
        <div className="flex flex-col items-center bg-white">
            <div className="relative">

                <img
                    src="/ukraine.svg"
                    alt="Карта України"
                    className="w-[600px] h-auto border border-gray-300"
                />

                {regions.map((region) => (
                    <div
                        key={region.id}
                        onClick={() => setSelectedRegion(region)}
                        className={`absolute border-2 rounded-lg cursor-pointer ${
                            selectedRegion?.id === region.id ? "bg-blue-500 bg-opacity-40 border-blue-700" : "bg-gray-300 bg-opacity-20 border-gray-500"
                        } hover:bg-blue-400 transition duration-300 ease-in-out`}
                        style={{
                            top: region.y,
                            left: region.x,
                            width: region.width,
                            height: region.height,
                        }}
                    />
                ))}
            </div>

            {selectedRegion && (
                <SelectedRegion
                    name={selectedRegion.name}
                    height={selectedRegion.height}
                    width={selectedRegion.width}
                    x={selectedRegion.x}
                    y={selectedRegion.y}
                />
            )}
        </div>

    )
}