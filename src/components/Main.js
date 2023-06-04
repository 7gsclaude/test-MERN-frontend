import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'
import { API_URLS } from '../urls'

console.log(API_URLS);

const Main = () => {

    const [people, setPeople] = useState(null)
    // const URL = 'http://localhost:4000/people'

    const getPeople = async () => {
        const response = await fetch(API_URLS.people)
        const data = await response.json()
        setPeople(data);
    }

 const createPeople = async (people) => {
   await fetch(API_URLS.MAIN_URL, {
     method: "POST",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify(people),
   });
   getPeople();
 };


    const updatePeople = async (people, id) => { 
        await fetch(API_URLS + id, {
            method: "PUT",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify(people),
        })
        getPeople()
    }

    const deletePeople = async (id) => { 
        await fetch(API_URLS + id, {
            method: "DELETE",
        })
        getPeople()
    }

    useEffect(() => {
        getPeople()
      }, [])

    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Index people={people} createPeople={createPeople} />} />
                <Route path="/people/:id" element={<Show people={people} updatePeople={updatePeople} deletePeople={deletePeople}/>} />
            </Routes>
        </main>
    )
}
//

export default Main


