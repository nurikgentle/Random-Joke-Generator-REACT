import React, { useState, useEffect } from 'react'
import "./Jokes.css"


export const Joke = () => {
    const url = 'http://api.icndb.com/jokes/random'

    const [isLoading, setIsLoading] = useState(true)
    const [joke, setJoke] = useState({})

    async function getJoke() {
        setIsLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        setJoke(data)
        setIsLoading(false)
    }

    useEffect(() => {
        setTimeout(() => {
            getJoke()
        }, 2000);
    }, [])



  return (
    <section className='jokes-sec'>
        <div className='container joke'>
            <h2>Random Joke Generator</h2>
            <h1 className='smiley'>😀</h1>
            <hr />
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <p>{joke.value.joke}</p>
            ) }
           
            <hr />
            <button onClick={getJoke}>Generate New Joke</button>
        </div>
    </section>
  )
}
