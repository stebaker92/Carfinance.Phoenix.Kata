import React, {Component} from "react"

const config = require("../config");

class BookingList extends Component {

    constructor() {
        super();

        this.state = {
            reservations: []

        };

        fetch(config.apiUrl + "booking").then(res => {
            res.json().then(data => {
                this.setState({reservations: data})
            })
        })
    }

    render() {
        return (
            <div>
                <h2>Bookings</h2>
                <table className={"table table-striped"}>
                    <thead>
                    <tr>
                        <th>Contact Name</th>
                        <th>Contact Number</th>
                        <th>Party Size</th>
                        <th>Table Number</th>
                        <th>Booking Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.reservations.map((r) => {
                        return <tr key={r.bookingId}>
                            <td>{r.contactName}</td>
                            <td>{r.contactNumber}</td>
                            <td>{r.numberOfPeople}</td>
                            <td>{r.tableNumber}</td>
                            <td>{r.bookingTime}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    };
}

export default BookingList;
