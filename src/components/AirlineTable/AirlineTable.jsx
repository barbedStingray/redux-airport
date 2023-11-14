
import { useSelector } from 'react-redux';

export default function AirlineTable() {

    const airlines = useSelector(store => store.airlines);

    return (
        <div id="airline-table">
            <h3>Airplanes at the Airport</h3>

            <table>
                <thead>
                    <tr>
                        <th>Airline</th>
                    </tr>
                </thead>
                <tbody>
                    {airlines.map((plane) =>
                        <tr key={plane}><td>{plane}</td></tr>
                    )}
                </tbody>
            </table>


        </div>
    )
}