import React from 'react'
import Board from 'react-trello'
const data = {
    lanes: [
        {
            cards: [
                {
                    description: '2 Gallons of milk at the Deli store',
                    id: 'Milk',
                    label: '15 mins',
                    laneId: 'PLANNED',
                    title: 'Buy milk'
                },
                {
                    description: 'Sort out recyclable and waste as needed',
                    id: 'Plan2',
                    label: '10 mins',
                    laneId: 'PLANNED',
                    title: 'Dispose Garbage'
                },
                {
                    description: 'Can AI make memes?',
                    id: 'Plan3',
                    label: '30 mins',
                    laneId: 'PLANNED',
                    title: 'Write Blog'
                },
                {
                    description: 'Transfer to bank account',
                    id: 'Plan4',
                    label: '5 mins',
                    laneId: 'PLANNED',
                    title: 'Pay Rent'
                }
            ],
            currentPage: 1,
            disallowAddingCard: true,
            id: 'PLANNED',
            label: '20/70',
            style: {
                width: 300,

            },
            title: 'Disallowed adding card'
        },
        {
            cards: [
                {
                    description: 'Track using fitbit',
                    id: 'Repeat1',
                    label: '30 mins',
                    laneId: 'REPEAT',
                    title: 'Morning Jog'
                }
            ],
            currentPage: 1,
            id: 'REPEAT',
            label: '1/1',
            style: {
                width: 300,

            },
            title: 'Repeat'
        },
        {
            cards: [
                {
                    description: 'Completed 10km on cycle',
                    id: 'Archived1',
                    label: '300 mins',
                    laneId: 'ARCHIVED',
                    title: 'Go Trekking'
                }
            ],
            currentPage: 1,
            id: 'ARCHIVED',
            label: '1/1',
            style: {
                width: 300,

            },
            title: 'Archived'
        },
        {
            cards: [
                {
                    description: 'Completed 10km on cycle',
                    id: 'Archived2',
                    label: '300 mins',
                    laneId: 'ARCHIVED2',
                    title: 'Go Jogging'
                }
            ],
            currentPage: 1,
            id: 'ARCHIVED2',
            label: '1/1',
            style: {
                width: 300,

            },
            title: 'Archived2'
        },
        {
            cards: [
                {
                    description: 'Completed 10km on cycle',
                    id: 'Archived3',
                    label: '300 mins',
                    laneId: 'ARCHIVED3',
                    title: 'Go Cycling'
                }
            ],
            currentPage: 1,
            id: 'ARCHIVED3',
            label: '1/1',
            style: {
                width: 300,

            },
            title: 'Archived3'
        }
    ]
}
export default function BoardJira() {
    return (
        <Board style={{ backgroundColor: 'white', height: '700px' }} data={data} />
    )
}
