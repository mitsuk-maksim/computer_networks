import React from 'react';

export function About(props) {
    return (
        <header className='about'>
            <div className='about__bg'>
                <div className='container'>
                    <h1 className='about__title'>
                        {props.title}
                    </h1>
                    <div className='about__description'>
                        {props.children}
                    </div >
                </div>
            </div>
        </header>
    )
}
