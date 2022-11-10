export function CategoryShow(props) {
  console.log(props);
  return (
    <div>
      <h1>Category information</h1>
      <p>Name: {props.category.title}</p>
      <p>Height: {props.category.description}</p>
      {props.category.exercises.map((exercise) => (
        <div key={exercise.id}>
          <p>name: {exercise.name} </p>
          <p> description: {exercise.description} </p>
          <img src={exercise.image_url} />
          <button onClick={() => props.onSelectDetail(exercise)}>Add to workout</button>
        </div>
      ))}
    </div>
  );
}
