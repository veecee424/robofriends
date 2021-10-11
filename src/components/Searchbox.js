import React from 'react'

const SearchBox = (props) => {
    const { searchChange } = props;
    return (
        <div className='pa2'>
            <input onChange={searchChange} className='pa3 b--green bg-lightest-blue' type='search' placeholder='Search for robot' />
        </div>
    )
}

export default SearchBox;