'use client'

import {useState} from "react";
import Card from "@/components/shared/memory-card/Card";

interface CardType {
    id: number
    src: string
    isFlipped: boolean
}

const cardImages: string[] = [
    '/users-photos/1.jpg',
    '/users-photos/2.jpg',
    '/users-photos/3.jpg',
    '/users-photos/4.jpg',
    '/users-photos/5.jpg',
    '/users-photos/6.jpg',
];

export default function Cards(){
    const [cards, setCards] = useState<CardType[]>(
        [...cardImages, ...cardImages].map((src, index) => ({
            id: index,
            src,
            isFlipped: false,
        }))
    );

    const handleCardClick = (id: number) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === id ? {...card, isFlipped: !card.isFlipped} : card
            )
        );
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
            <div className="grid grid-cols-4 gap-6">
                {cards.map((card) => (
                    <Card key={card.id} handleCardClick={handleCardClick} id={card.id} isFlipped={card.isFlipped} src={card.src} />
                ))}
            </div>
        </div>
    )
}