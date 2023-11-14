
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function AirlineForm() {

    const [airlineName, setAirlineName] = useState('');
    const [airplaneNumber, setAirplaneNumber] = useState('');

    const dispatch = useDispatch();

    // dispatch the airline
    const addAirline = () => {
        console.log(`adding new airline...`);

        let action = {
            type: 'ADD_AIRLINE',
            payload: { airlineName: airlineName, airplaneNumber: airplaneNumber }
        }
        dispatch(action);
    }


    return (
        <div id="airline-form">
            <input
                value={airlineName}
                onChange={(e) => setAirlineName(e.target.value)}
                placeholder='Airline Name' />
            {airlineName}

            <input
                value={airplaneNumber}
                type="number"
                onChange={(e) => setAirplaneNumber(e.target.value)}
                placeholder='Airplane Number' />
            {airplaneNumber}

            <button onClick={addAirline} >Add Airline</button>


        </div>
    )
}

