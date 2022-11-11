import { DetailsNew } from "./DetailsNew";

export function WorkoutsIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>All Your Workouts </h1>
      {props.workouts?.map((workout) => (
        <div key={workout.id}>
          <h2>{workout.title}</h2>
          <p> {workout.id}</p>
          <div>
            {workout.workout_details.map((detail) => (
              <div key={detail.id}>
                {
                  <div>
                    {/* {console.log(detail)} */}
                    <p> {detail.reps}</p>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
