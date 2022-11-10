export function DateNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateDate(params, () => event.target.reset());
  };

  const schedule = props.date;
  const useful = JSON.stringify(schedule);
  const last = useful.split("");
  const first = last.slice(1, 5);
  const year = first.join("");
  const month1 = last.slice(6, 8);
  const month = month1.join("");
  const day1 = last.slice(9, 11);
  const day = day1.join("");
  const finalDay = parseInt(day);
  const finalMonth = parseInt(month);
  const finalYear = parseInt(year);
  console.log(typeof finalYear);

  return (
    <div>
      <h1>New Date</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Day: <input defaultValue={finalDay} name="day" type="number" />
        </div>
        <div>
          Month: <input defaultValue={finalMonth} name="month" type="number" />
        </div>
        <div>
          Year: <input defaultValue={finalYear} name="year" type="number" />
        </div>
        <div>
          Workout ID: <input name="workout_id" type="number" />
        </div>
        <button type="submit">Create Date </button>
      </form>
    </div>
  );
}
