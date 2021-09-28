import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox'
import { robots } from './robots'

class App extends Component {

    constructor () {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        //Pick the value of input and set searchfield to its value
        this.setState({
            searchfield: event.target.value
        })

    }

    render () {
        // Filter robots
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }

}

export default App;