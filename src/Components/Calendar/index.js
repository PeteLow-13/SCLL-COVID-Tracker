import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const initialState = { date: undefined };

    // <div
    //     className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    //     style={containerStyles}
    // >
    //     <DatePicker
    //         required
    //         error="Select a date is Required"
    //         placeholder="Select a date"
    //         value={state.date}
    //         label="DatePicker Label"
    //         onChange={value => setState({ date: value })}
    //     />
    // </div>

function Calendar() {
    return (
        <div
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
        style={containerStyles}
    >
        <DatePicker
            required
            error="Select a date is Required"
            placeholder="Select a date"
            value={state.date}
            label="DatePicker Label"
            onChange={value => setState({ date: value })}
        />
    </div>
    )
}

export default Calendar
