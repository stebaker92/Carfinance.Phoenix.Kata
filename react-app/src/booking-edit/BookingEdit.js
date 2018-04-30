import React, {Component} from "react"
import {Link} from "react-router-dom";
import {Loader, LoadingOverlay} from "react-overlay-loader";

const config = require("../config");

class BookingEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            booking: {
                contactName: "",
                contactNumber: "",
                numberOfPeople: "",
                tableNumber: "",
                bookingTime: ""
            }
        };

        const queryParams = BookingEdit.parseQuery(this.props.location.search);

        fetch(config.apiUrl + "booking?bookingId=" + queryParams.bookingId).then(res => {
            res.json().then(data => {
                let d = new Date(data.bookingTime);
                // react expects dates in a certain format for forms
                data.bookingTime = `${d.getFullYear()}-${`${d.getMonth() + 1}`.padStart(2, 0)}-${`${d.getDate()}`.padStart(2, 0)}T${`${d.getHours()}`.padStart(2, 0)}:${`${d.getMinutes()}`.padStart(2, 0)}`

                this.setState({booking: data});
                this.setState({loading: false});
            })
        });

        this.handleChangeGeneric = this.handleChangeGeneric.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    static parseQuery(queryString) {
        let query = {};
        let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (let i = 0; i < pairs.length; i++) {
            let pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    }


    render() {
        return (
            <div>
                <h2>Edit booking</h2>
                <LoadingOverlay>
                    <Loader loading={this.state.loading}/>


                    <form className="offset-4 col-md-4 text-left">
                        <div className={"form-group"}>
                            <label>Contact Name</label>
                            <input type="text" className="form-control" name="contactName"
                                   value={this.state.booking.contactName} onChange={this.handleNameChange}/>
                        </div>

                        <div className={"form-group"}>
                            <label>Contact Number</label>
                            <input type="text" className="form-control" name="contactNumber"
                                   value={this.state.booking.contactNumber}
                                   onChange={this.handleChangeGeneric}/>
                        </div>

                        <div className={"form-group"}>
                            <label>Number of People</label>
                            <input type="text" className="form-control" name="numberOfPeople"
                                   value={this.state.booking.numberOfPeople}
                                   onChange={this.handleChangeGeneric}/>
                        </div>

                        <div className={"form-group"}>
                            <label>Table Number</label>
                            <input type="number" className="form-control" name="tableNumber"
                                   value={this.state.booking.tableNumber}
                                   onChange={this.handleChangeGeneric}/>
                        </div>

                        <div className={"form-group"}>
                            <label>Booking Time</label>
                            <input type="datetime-local" className="form-control" name="bookingTime"
                                   value={this.state.booking.bookingTime}
                                   onChange={this.handleChangeGeneric}/>
                        </div>

                        <button className="btn btn-default">
                            <Link to="/bookings">Back</Link>
                        </button>

                        <input className={"btn btn-primary"} type="button" value="Submit"
                               onClick={() => this.saveBooking()}/>

                        <div className="text text-danger">{this.state.response}</div>

                    </form>
                </LoadingOverlay>
            </div>
        )
    };

    saveBooking() {
        console.log(this.state.booking);

        fetch(config.apiUrl + "booking", {
            method: "post",
            body: JSON.stringify(this.state.booking),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => {
            if (res.status === 200) {
                console.log("success")
                this.props.history.push("/bookings")
            } else {
                res.json().then(text => {
                    this.setState({response: "An error occurred: " + text.message})
                });
            }
        })
    }

    handleNameChange(event) {
        let modified = this.state.booking;
        modified.contactName = event.target.value;
        this.setState({booking: modified})
    }

    handleChangeGeneric(event) {
        let modifiedItem = {...this.state.booking}; // copy the item
        modifiedItem[event.target.name] = event.target.value;

        console.log(`changing field ${event.target.name} to ${event.target.value}`);

        this.setState({booking: modifiedItem});

    }

}

export default BookingEdit;
