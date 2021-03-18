import React from 'react'


function Questions() {
    return (
        <div>
            <form>
                <p>Has your child had a fever of 100 degrees or higher in the 48 hours prior to the practice/game?</p>
                <label>Yes</label>
                <input 
                    name='q1'
                    type='checkbox'
                ></input>
                <label>No</label>
                <input 
                    name='q1'
                    type='checkbox'
                ></input>
            </form>
            <form>
                <p>Is your child experiencing chills, new shortness of breath, loss of smell/taste, sore throat, vomiting, diarrhea, or cough/congestion/runny nose that cannot be attributed to allergies? </p>
                <label>Yes</label>
                <input 
                    name='q2'
                    type='checkbox'
                ></input>
                <label>No</label>
                <input 
                    name='q2'
                    type='checkbox'
                ></input>
            </form>
            <form>
                <p>Has your child been in close contact with someone who has been diagnosed with COVID in the last 10 days or who has been asked to quarantine, or is your child awaiting results from a COVID test?</p>
                <label>Yes</label>
                <input 
                    name='q3'
                    type='checkbox'
                ></input>
                <label>No</label>
                <input 
                    name='q3'
                    type='checkbox'
                ></input>
            </form>
            <p>Please note that if your child has a fever or appears to be ill at practice/games, we will contact you immediately for pickup. </p>
        </div>
    )
}

export default Questions
