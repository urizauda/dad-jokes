import React, { useState, useEffect } from 'react';
import getDadJoke from '../services/getDadJoke';

export default function DadJoke() {
    const [joke, setJoke] = useState("Joke is loading...")

    const getJoke = () => {
        getDadJoke().then((joke) => { setJoke(joke) },
            () => { setJoke('Error') }
        );
    }

    useEffect(getJoke, []);

    return (
        <div className='joke'>
            <p>{joke}</p>
            <button onClick={getJoke}>Click for next joke</button>
        </div>
    )
}
