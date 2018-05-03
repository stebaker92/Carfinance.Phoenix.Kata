import React, {Component} from "react"
import {Link} from "react-router-dom";

class BookingActions extends Component {
    render() {
        return (
            <div>
                <button className={"btn btn-default"}>
                    <Link to="/booking-add">
                        New Booking
                    </Link>
                </button>
            </div>
        )
    };
}

export default BookingActions;
