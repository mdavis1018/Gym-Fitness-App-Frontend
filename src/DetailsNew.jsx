export function DetailsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateDetail(params, () => event.target.reset());
  };
  console.log(props.exercise?.id);
  return (
    <div>
      <h1>New Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          exercise_id: <input defaultValue={props.exercise?.id} name="exercise_id" type="number" />
        </div>
        <div>
          workout_id: <input name="workout_id" type="number" />
        </div>
        <div>
          reps: <input name="reps" type="number" />
        </div>
        <div>
          weight: <input name="weight" type="number" />
        </div>
        <div>
          sets: <input name="sets" type="number" />
        </div>
        <button type="submit">Create Detail</button>
      </form>
    </div>
  );
}
