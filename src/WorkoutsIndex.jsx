export function WorkoutsIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>All Your Workouts </h1>
      {props.workouts?.map((workout) => (
        <div key={workout.id}>
          <h2>{workout.title}</h2>
          <button onClick={() => props.onSelectWorkout(workout)}>More info</button>
        </div>
      ))}
    </div>
  );
}
