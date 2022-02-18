import React from 'react';

export function Header(props) {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-brand'>
                    {props.brand}
                </div>
            </div>
        </header>
    )
}
