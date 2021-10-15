import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox'
import ErrorBoundary from '../components/Error';
import Scroll from '../components/Scroll'
import './App.css'

function App () {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    const onSearchChange = (event) => {
        /**
         * Pick the value of input and set searchfield to its value
         */
        setSearchfield(event.target.value)
    }

    /**
     * If component was mounted (inserted into the render tree) successfully, fetch users
     */
    useEffect( ()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)})
        .catch(e=> console.log('Unable to fetch robots'))
    }, []) // Fetch users only once the component is mounted

    /**
     * Filter robots
     */
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    /**
     * Render a loading h1 tag while the robots are being fetched
     */
    if (!robots.length) {
        return <h1>Loading....</h1>
    }
    
    return (
        <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <Searchbox searchChange={onSearchChange}/>
            <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </div>
        </div>
    )
}

export default App;