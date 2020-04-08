import React, { Component } from 'react'

export class Form2 extends Component {
    render() {
        return (
            <div className="calender">
               <div className="calnder_option">
                   <h1>Please select your preferred slot</h1>
                   <div className="time_btn">
                       <button className="select_time">10:00 AM</button>
                       <button className="select_time">10:00 AM</button>
                       <button className="select_time">10:00 AM</button>
                       <button className="select_time">10:00 AM</button>
                       </div>
                       <div className="book_app">
                       <button className="app_btn">Book Appointment</button>
                           </div>
                   </div>
            </div>
        )
    }
}

export default Form2