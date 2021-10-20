import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox'
import { connect } from 'react-redux'
import ErrorBoundary from '../components/Error';
import Scroll from '../components/Scroll'
import './App.css'
import { setSearchField } from '../actions'

const mapStateToProps = (state) => {
    return {
        /**
         * Return new state from the reducer function
         */
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /**
         * Dispatch action/event which triggers state manipulation
         */
        onSearchChange: (event) => {
            dispatch(setSearchField(event.target.value))
        }
    }
}

function App (props) {

    const [robots, setRobots] = useState([])
    const { searchField, onSearchChange } = props

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
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
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
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);