import React, {Component, useEffect, useState} from 'react';

export function Calendar() {
    const [calendarState, setCalendarState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setCalendarState(date.toLocaleDateString());
        }, 1000)
    }, [])

    return (
        <div>
            {calendarState}
        </div>
    );
}
