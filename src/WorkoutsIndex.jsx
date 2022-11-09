export function WorkoutsIndex(props) {
  return (
    <div>
      {console.log(props)}
      <h1>All Your Workouts </h1>
      <div className="container text-center">
        <div className="row row-cols-4 row-cols-md-2 g-4">
          {props.workouts.map((workout) => (
            <div key={workout.id}>
              <div className="card">
                <h2>{workout.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
