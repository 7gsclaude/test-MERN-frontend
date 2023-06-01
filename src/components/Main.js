import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'


const Main = () => {

    const [people, setPeople] = useState(null)
    const URL = 'http://localhost:4000/people'

    const getPeople = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setPeople(data);
    }

    const createPeople = async (people) => { 
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify(people),
        })
        getPeople()
    };

    useEffect(() => {
        getPeople()
      }, [])

    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Index people={people} createPeople={createPeople} />} />
                <Route path="/:id" element={<Show people={people}/>} />
            </Routes>
        </main>
    )
}
//

export default Main


