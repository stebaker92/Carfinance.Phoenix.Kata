import React, {Component} from "react"
import {Link} from "react-router-dom";
import {Loader, LoadingOverlay} from "react-overlay-loader";

const config = require("../config");

class BookingAdd extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            booking: {}
        };

        this.handleChangeGeneric = this.handleChangeGeneric.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    render() {
        return (
            <div>
                <h2>Add booking</h2>
                <LoadingOverlay>
                    <Loader loading={this.state.loading}/>

                    <form className="offset-4 col-md-4 text-left">

                        <div className={"form-group"}>
                            <label>Contact Name</label>
                            <input type="text" className="form-control" name="contactName"
                                   onChange={this.handleNameChange}/>
                        </div>

                        <div className={"form-group"}>
                            <label>Contact Number</label>
                            <input type="text" className="form-control" name="contactNumber"
                                   onChange={this.handleChangeGeneric}/>
                        </div>

                        <div className={"form-group"}>
                            <label>Number of People</label>
                            <input type="text" className="form-control" name="numberOfPeople"
                                   onChange={this.handleChangeGeneric}/>
                        </div>

                        <div className={"form-group"}>
                            <label>Table Number</label>
                            <input type="number" className="form-control" name="tableNumber"
                                   onChange={this.handleChangeGeneric}/>
                        </div>

                        <div className={"form-group"}>
                            <label>Booking Time</label>
                            <input type="datetime-local" className="form-control" name="bookingTime"
                                   onChange={this.handleChangeGeneric}/>
                        </div>

                        <button className="btn btn-default">
                            <Link to="/bookings">Back</Link>
                        </button>

                        <input className={"btn btn-primary"} type="button" value="Submit"
                               onClick={() => this.addBooking()}/>

                        <div className="text text-danger">{this.state.response}</div>

                    </form>
                </LoadingOverlay>
            </div>
        )
    };

    addBooking() {
        console.log(this.state.booking);
        this.setState({loading: true});

        fetch(config.apiUrl + "booking", {
            method: "post",
            body: JSON.stringify(this.state.booking),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => {
            this.setState({loading: false});

            if (res.status === 200) {
                console.log("success");
                this.setState({loading: false});
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

export default BookingAdd;
