import React, {Component} from "react"

class BookingList extends Component {

    constructor() {
        super();

        this.state = {
            reservations: [
                {
                    key: 1,
                    name: "Steve"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>Bookings</h2>
                <table className={"table table-striped"}>
                    <tbody>
                    <tr>
                        <td>Name</td>
                    </tr>
                    {this.state.reservations.map((r) => {
                        return <tr key={r.key}>
                            <td>{r.name}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    };
}

export default BookingList;
