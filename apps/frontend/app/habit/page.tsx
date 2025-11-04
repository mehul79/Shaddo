"use client"
import { HabitCard } from '@/components/habit/habit-card';
import { useState } from 'react';


interface Habit {
    id: string
    title: string
    description?: string
    reminderTimes?: string[]
    streak: number
    completed?: boolean
    expiresInDays?: number
    group?: {
        name: string
        color: string
        icon: string
    }
}

const SAMPLE_HABITS: Habit[] = [
    {
        id: "1",
        title: "Morning Run",
        description: "Go for a 5km run in the morning to start the day energized",
        reminderTimes: ["6:00 AM"],
        streak: 12,
        completed: false,
        expiresInDays: 2,
        group: {
            name: "Fitness",
            color: "purple",
            icon: "Dumbbell",
        },
    },
    {
        id: "2",
        title: "Read Books",
        description: "Read for at least 30 minutes before bed",
        reminderTimes: ["9:00 PM"],
        streak: 28,
        completed: true,
        expiresInDays: 5,
        group: {
            name: "Learning",
            color: "blue",
            icon: "BookOpen",
        },
    },
    {
        id: "3",
        title: "Drink Water",
        description: "Stay hydrated throughout the day with 8 glasses",
        reminderTimes: ["8:00 AM", "12:00 PM", "6:00 PM"],
        streak: 45,
        completed: false,
        expiresInDays: 1,
        group: {
            name: "Health",
            color: "green",
            icon: "Apple",
        },
    },
    {
        id: "4",
        title: "Meditate",
        description: "Practice mindfulness meditation for 10 minutes",
        reminderTimes: ["7:00 AM"],
        streak: 6,
        completed: true,
        expiresInDays: 3,
        group: {
            name: "Wellness",
            color: "cyan",
            icon: "Brain",
        },
    },
    {
        id: "5",
        title: "Code for an Hour and",
        description: "Spend dedicated time improving coding skills",
        reminderTimes: ["10:00 AM"],
        streak: 3,
        completed: false,
        expiresInDays: 0,
        group: {
            name: "Development",
            color: "indigo",
            icon: "Code",
        },
    },
    {
        id: "6",
        title: "Creative Writing",
        description: "Write 500 words in your journal or story",
        reminderTimes: ["8:00 PM"],
        streak: 15,
        completed: false,
        expiresInDays: 4,
        group: {
            name: "Creative",
            color: "pink",
            icon: "Palette",
        },
    },
    {
        id: "6",
        title: "Creative Writing",
        description: "Write 500 words in your journal or story",
        reminderTimes: ["8:00 PM"],
        streak: 15,
        completed: false,
        expiresInDays: 4,
        group: {
            name: "Creative",
            color: "pink",
            icon: "Palette",
        },
    },
    {
        id: "6",
        title: "Creative Writing",
        description: "Write 500 words in your journal or story",
        reminderTimes: ["8:00 PM"],
        streak: 15,
        completed: false,
        expiresInDays: 4,
        group: {
            name: "Creative",
            color: "pink",
            icon: "Palette",
        },
    },
    {
        id: "6",
        title: "Creative Writing",
        description: "Write 500 words in your journal or story",
        reminderTimes: ["8:00 PM"],
        streak: 15,
        completed: false,
        expiresInDays: 4,
        group: {
            name: "Creative",
            color: "pink",
            icon: "Palette",
        },
    },
]

export default function HabitsPage() {


    const [habits, setHabits] = useState<Habit[]>(SAMPLE_HABITS)

    const handleMarkComplete = (habitId: string) => {
        setHabits(habits.map((habit) => (habit.id === habitId ? { ...habit, completed: true } : habit)))
    }

    const handleMarkIncomplete = (habitId: string) => {
        setHabits(habits.map((habit) => (habit.id === habitId ? { ...habit, completed: false } : habit)))
    }

    const handleUpdateHabit = (habitId: string, updates: any) => {
        setHabits(
            habits.map((habit) =>
                habit.id === habitId
                    ? {
                        ...habit,
                        title: updates.title || habit.title,
                        description: updates.description || habit.description,
                        reminderTimes: updates.reminderTimes || habit.reminderTimes,
                        group: updates.group || habit.group,
                    }
                    : habit,
            ),
        )
    }


    return (
        <>
            <div className="relative h-screen w-screen overflow-y-hidden">
                <div className="w-full max-w-[calc(100%-130px)] rounded-lg p-2
             bg-gray-700 absolute top-4 left-2 h-9 flex items-center">
                </div>
                <div className="grid grid-cols-9 gap-2 absolute top-14 left-2 right-2 bottom-2 min-h-0">
                    <div className="col-span-6 h-full rounded-2xl bg-blue-700/60 border border-white/10 shadow-xl p-4 flex flex-col justify-start min-h-0 overflow-hidden">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-6 h-full max-h-full justify-start items-start content-start overflow-y-auto pr-2 gap-y-10 pb-24 scroll-smooth">
                            {habits.map((habit) => (
                                <div key={habit.id} className="min-w-0">
                                    <HabitCard
                                        {...habit}
                                        onMarkComplete={handleMarkComplete}
                                        onMarkIncomplete={handleMarkIncomplete}
                                        onUpdateHabit={handleUpdateHabit}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-yellow-400 rounded-lg flex items-center justify-center col-span-3 overflow-y-auto min-h-0">
                        Side Content
                    </div>
                </div>
            </div>
        </>
    );
}
