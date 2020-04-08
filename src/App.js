import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import * as formactions from "../src/Actions/formaction";
import "bootstrap/dist/css/bootstrap.min.css";

// import Modal from 'react-modal';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
const API_KEY='AIzaSyBVvXCgQnBhh0MetzfMFsGeL8-hxoC9GEY'

 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount = () => {
    // this.getEvents();
  }
  createEvent = () =>{
    
    let date= this.state.date;
    const startTime = moment(moment(new Date(date)).format("YYYY-MM-DD") + " " + "12:00 AM").format();
    const endTime = moment(moment("12:00 AM")).add(30, 'minutes').format();
    
    const event = {
    'location': 'IND',
    'description': `${this.state.description}`,
    'start': {
      'dateTime': startTime,
      'timeZone': 'GMT+5:30'
      },
      'end': {
      'dateTime': endTime,
      'timeZone': 'GMT+5:30'
      },
    'attendees': []
    };
    const gapi = window['gapi'];
    function start() {
    gapi.client.init({
    'apiKey': 'AIzaSyBe2hBfB43We985TE7QGn75OrQku5Pm5fg',
    'clientId': '392882505567-g313to1o4vj3paliqlhhsdaevm9kupai.apps.googleusercontent.com',
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
    scope: "https://www.googleapis.com/auth/calendar"
    }).then(async function() {

    
    const googleAuth = gapi.auth2.getAuthInstance();
    console.log("googleUser googleAuth",googleAuth)
    const googleUser = await googleAuth.signIn();
    const token = googleUser.getAuthResponse().id_token;
   
    const request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event
    });
    request.execute(function(event) {
      
    alert(`Successfully done.`)
    });
    })
    }
    gapi.load('client:auth2', start)
    }
 
  checkresult=()=>{
    this.createEvent();
  
  }  
  handlechange=(e)=>{
    this.props.handleChange(e)

    this.setState({[e.target.name]:e.target.value})
  }

    render() {
      console.log(this.state)
        return (
            <div className="meeting_booking">

                <div className="form_data">
                    <h1>Meeting Room Booking</h1>
                <div className="form_group">
                  <label>Meeting Room</label>
                  <select name="MeetingRoom"onChange={this.handlechange}>
                      <option>Training Room</option>
                      <option>Meeting Room1</option>
                      <option>Training Room 2</option>
                  </select>
                </div>
                <div className="form_group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" name="name"onChange={this.handlechange}/>
                </div>
                <div className="form_group">
                <label>Email</label>
                <input type="text" name="email" onChange={this.handlechange} />
                </div>

                <div className="form_group">
                <label>Meeting Description</label>
                <input type="text" placeholder="Enter meeting description" name="description" onChange={this.handlechange} />
                </div>
                {/* <button onClick={this.redirectnext}>Next</button> */}
                </div>
                <div className="form_group">
                  <DatePicker
                  onChange={(date)=>{this.setState({date:date})}}
                  inline/>
</div>
                <div className="calender">
               <div className="calnder_option">
                   <h1>Please select your preferred slot</h1>
                   <div className="time_btn">
                       <input type="button" className="select_time"name="time"  value="10:00 AM"/>
                       <input type="button" className="select_time"name="time" value="12:00 AM"/>
                       <input type="button" className="select_time"name="time"  value="1:00 PM"/>
                       <input type="button" className="select_time"name="time"  value="2:00 PM"/>
                       <input type="button" className="select_time"name="time"  value="3:00 PM"/>
                       <input type="button" className="select_time"name="time"  value="4:00 AM"/>

       

                       </div>
                       <div className="book_app">
                       <button className="app_btn" onClick={this.checkresult}>Book Appointment</button>
                           </div>
                   </div>
            </div>
            <div>
          
    };
            </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
  console.log("TCL: state", state);
  return {
    formdata:state.formreducer.formData
  };
};
export default connect(mapStateToProps, { ...formactions })(
    App
);
  