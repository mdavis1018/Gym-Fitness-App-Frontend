export function WorkoutsIndex(props) {
  console.log(props);
  return (
    <div>
      <h1 className="container text-center">All Your Workouts </h1>
      <div className="container text-center">
        <div className="row row-cols-4 row-cols-md-2 g-4">
          {props.workouts?.map((workout) => (
            <div className="card">
              <div key={workout.id}>
                <h2 class="text-dark">{workout.title}</h2>
                <button class="btn btn-primary" onClick={() => props.onSelectWorkout(workout)}>
                  More info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
