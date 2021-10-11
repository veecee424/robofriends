import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox'
import ErrorBoundary from '../components/Error';
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component {

    constructor () {
        super();
        this.state = {
            robots: [], // Initialize robots as an empty array so it gets updated by the fetch operation
            searchfield: '' // Initialize searchfield as an empty string so it gets updated by the search input.
        }
    }

    onSearchChange = (event) => {
        /**
         * Pick the value of input and set searchfield to its value
         */
        this.setState({
            searchfield: event.target.value
        })
    }

    /**
     * If component was mounted (inserted into the render tree) successfully, fetch users
     */
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots:users})})
        .catch(e=> console.log('Unable to fetch robots'))
    }

    render () {
        const { robots, searchfield } = this.state;
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
                <Searchbox searchChange={this.onSearchChange}/>
                <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </div>
            </div>
        )
    }

}

export default App;