import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'
import { API_URLS } from '../urls'


const Main = (props) => {


    const [people, setPeople] = React.useState([])
    const URL = API_URLS.MAIN_URL

    const getPeople = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setPeople(data);

    }

    const createPeople = async (person) => { 
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
        })
        getPeople()
    }

    useEffect(() => getPeople())    
    // this calls the list of people 

    
    return (
        <main>
            <Routes>
                <Route path="/" element={<Index people={people} createPeople={createPeople} />} />
                <Route path="/:id" element={<Show />} />

            </Routes>
        </main>
    )
}
//

export default Main


