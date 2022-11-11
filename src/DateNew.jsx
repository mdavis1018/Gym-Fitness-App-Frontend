export function DateNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateDate(params, () => event.target.reset());
  };

  // console.log(props.day);
  // function dateTest() {
  //   if (props.date) {

  // const schedule = props.date;
  // console.log(schedule);
  // console.log(typeof schedule);
  // const useful = JSON.stringify(schedule);
  // const last = useful.split("");
  // const first = last.slice(1, 5);
  // const year = first.join("");
  // const month1 = last.slice(6, 8);
  // const month = month1.join("");
  // const day1 = last.slice(9, 11);
  // const day = day1.join("");
  // const finalDay = parseInt(day);
  // const finalMonth = parseInt(month);
  // const finalYear = parseInt(year);
  // console.log(typeof finalYear);

  return (
    <div>
      <h1>New Date</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Day: <input defaultValue={props.day} name="day" type="number" />
        </div>
        <div>
          Month: <input defaultValue={props.month} name="month" type="number" />
        </div>
        <div>
          Year: <input defaultValue={props.year} name="year" type="number" />
        </div>
        <div>
          Workout ID: <input name="workout_id" type="number" />
        </div>
        <button type="submit">Create Date </button>
      </form>
    </div>
  );
}
