import React, {Component} from "react"
import BookingActions from "../booking-actions/BookingActions";

const config = require("../config");

class BookingList extends Component {

    constructor() {
        super();

        this.state = {
            reservations: []

        };

        fetch(config.apiUrl + "booking").then(res => {
            res.json().then(data => {
                // Sort by date
                data = data.sort((a, b) => {
                    return new Date(a.bookingTime) - new Date(b.bookingTime)
                });
                data = data.map(b => {
                    b.bookingTime = new Date(b.bookingTime)
                    return b;
                })
                this.setState({reservations: data})
            })
        })
    }

    hasSingleDiner(r) {
        return r.numberOfPeople === 1;
    }

    hasLargeParty(r) {
        return r.numberOfPeople > 6;
    }

    render() {
        return (
            <div>
                <h2>Bookings</h2>
                <BookingActions/>
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
                        return <tr key={r.bookingId}
                                   className={(this.hasLargeParty(r) ? "text-danger" : "") + (this.hasSingleDiner(r) ? "text-primary" : "")}>
                            <td>{r.contactName}</td>
                            <td>{r.contactNumber}</td>
                            <td>{r.numberOfPeople}</td>
                            <td>{r.tableNumber}</td>
                            <td>{r.bookingTime.toLocaleString()}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    };
}

export default BookingList;
