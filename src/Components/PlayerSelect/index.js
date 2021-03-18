import React from 'react'

function PlayerSelect() {
    return (
        <div>
            <h2>Slect a player:</h2>
            <form>
                <ul>
                <label>Tom Cat</label>
                <input 
                    name='q1'
                    type='checkbox'
                ></input>
                <label>Jerry Mouse</label>
                <input 
                    name='q1'
                    type='checkbox'
                ></input>
                <label>John Smith</label>
                <input 
                    name='q1'
                    type='checkbox'
                ></input>
                </ul>
            </form>
            <button>Back to Teams</button>
            
        </div>
    )
}

export default PlayerSelect
