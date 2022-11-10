import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { DateNew } from "./DateNew";
import axios from "axios";

export function WorkoutsNew(props) {
  const [selectedDate, setSelectedDate] = useState();
  const [calendarText, setCalendarText] = useState(`No Date is selected`);
  const [date, setDate] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateWorkout(params, () => event.target.reset());
  };
  console.log(props);

  const handleDateChange = (value) => {
    console.log(value);
    setSelectedDate(value);
    setCalendarText(`The selected Date is ${value.toDateString()}`);
  };

  const handleYearChange = (value) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue} Year  is selected`);
  };

  const handleMonthChange = (value) => {
    const monthValue = allMonthValues[value.getMonth()];
    setCalendarText(`${monthValue} Month  is selected`);
  };

  const handleCreateDate = (params, successCallback) => {
    console.log("handleCreateDate", params);
    axios.post("http://localhost:3000/days.json", params).then((response) => {
      setDate([...date, response.data]);
      successCallback();
    });
  };

  console.log(selectedDate);

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
      <div className="app">
        <h2 className="calander-details">{calendarText}</h2>
        <Calendar
          onClickMonth={handleMonthChange}
          onClickYear={handleYearChange}
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>
      <DateNew onCreateDate={handleCreateDate} date={selectedDate} />
    </div>
  );
}
