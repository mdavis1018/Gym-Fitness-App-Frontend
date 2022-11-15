export function WorkoutsShow(props) {
  const handleClick = () => {
    props.onDestroyWorkout(props.workout);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateWorkout(props.workout.id, params, () => event.target.reset());
  };

  const handleClick1 = () => {
    props.onDestroyDetails(props.workout.workout_details);
  };

  console.log(props.workout.day);
  return (
    <div>
      <h1>Workout Information</h1>
      <p>Title: {props.workout.title}</p>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-md-2 g-3">
          {props.workout.workout_details.map((details) => (
            <div className="card">
              <div key={details.id}>
                <p> Exercise: {details.exercise.name}</p>
                {console.log(details)}
                <img src={details.exercise.image_url} width="450" height="400" />
                <p> Reps :{details.reps}</p>
                <p> Sets: {details.sets}</p>
                <p> Weight: {details.weight}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          {/* <form onSubmit={handleSubmit}>
            <div>
              Name: <input defaultValue={props.workout?.status} name="status" type="boolean" />
            </div>
            <button type="submit">Update Status</button>
          </form> */}
        </div>
      </div>
      <div>
        {props.workout.day?.map((day) => (
          <div>
            <p>
              Scheduled For: {day.month}/{day.day}/{day.year}
            </p>
          </div>
        ))}
      </div>
      <button onClick={() => props.onSelectDate(props.workout)}>Date Form </button>
      <button onClick={handleClick}>Delete Workout</button>
    </div>
  );
}
