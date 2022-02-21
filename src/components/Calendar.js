import React from 'react';

export function Calendar() {

    return (
        <div>
            {new Date().toLocaleDateString()}
        </div>
    );
}
