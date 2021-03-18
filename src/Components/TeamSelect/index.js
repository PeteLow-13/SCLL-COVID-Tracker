import React from 'react'

function TeamSelect() {
    return (
        <div>
            <h2>Select a team:</h2>
            <ul>
                <label>Cats</label>
                    <input 
                    name='q1'
                    type='checkbox'
                    ></input>
                <label>Mice</label>
                    <input 
                    name='q1'
                    type='checkbox'
                    ></input>
                <label>Birds</label>
                    <input 
                    name='q1'
                    type='checkbox'
                    ></input> 
            </ul>
            <button>Select Team</button>
        </div>
    )
}

export default TeamSelect
