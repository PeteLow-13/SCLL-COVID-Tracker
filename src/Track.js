import React, { Component } from 'react';
import TeamSelect from './Components/TeamSelect';

export class Track extends Component {
    render() {
        return (
            <div>
                <h2>Start tracking</h2>
                <TeamSelect />
            </div>
        )
    }
}

export default Track
