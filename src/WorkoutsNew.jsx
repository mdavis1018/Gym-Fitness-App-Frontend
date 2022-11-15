import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { DateNew } from "./DateNew";
import axios from "axios";

export function WorkoutsNew(props) {
  // const [selectedDate, setSelectedDate] = useState();
  // const [calendarText, setCalendarText] = useState(`No Date is selected`);
  // const [date, setDate] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateWorkout(params, () => event.target.reset());
  };
  console.log(props);

  // const handleDateChange = (value) => {
  //   console.log(value);
  //   setSelectedDate(value);
  //   setCalendarText(`The selected Date is ${value.toDateString()}`);
  // };

  // const handleYearChange = (value) => {
  //   const yearValue = value.getFullYear();
  //   setCalendarText(`${yearValue} Year  is selected`);
  // };

  // const handleMonthChange = (value) => {
  //   const monthValue = allMonthValues[value.getMonth()];
  //   setCalendarText(`${monthValue} Month  is selected`);
  // };

  var schedule = "";
  var useful = "";
  var last = "";
  var first = "";
  var year = "";
  var month1 = "";
  var month = "";
  var day1 = "";
  var day = "";
  var finalDay = "";
  var finalMonth = "";
  var finalYear = "";

  // if (selectedDate) {
  //   schedule = selectedDate;
  //   // console.log(schedule);
  //   // console.log(typeof schedule);
  //   useful = JSON.stringify(schedule);
  //   // console.log(useful);
  //   last = useful.split("");
  //   first = last.slice(1, 5);
  //   year = first.join("");
  //   month1 = last.slice(6, 8);
  //   month = month1.join("");
  //   day1 = last.slice(9, 11);
  //   day = day1.join("");
  //   finalDay = parseInt(day);
  //   finalMonth = parseInt(month);
  //   finalYear = parseInt(year);
  //   // console.log(finalDay, finalMonth, finalYear);
  // }
  // console.log(finalDay, finalMonth, finalYear);

  return (
    <div>
      <h1>New Workout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          User ID: <input name="user_id" type="number" />
        </div>
        <div>
          Status: <input name="status" type="boolean" />
        </div>
        <div></div>
        <button type="submit">Create Workout</button>
      </form>
      {/* <div className="app">
        <h2 className="calander-details">{calendarText}</h2>
        <Calendar
          onClickMonth={handleMonthChange}
          onClickYear={handleYearChange}
          onChange={handleDateChange}
          value={selectedDate}
        /> */}
      {/* </div> */}
      {/* <DateNew onCreateDate={handleCreateDate} day={finalDay} month={finalMonth} year={finalYear} /> */}
    </div>
  );
}
