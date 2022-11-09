export function CategoryShow(props) {
  return (
    <div>
      <h1>Category information</h1>
      <p>Name: {props.category.title}</p>
      <p>Height: {props.category.description}</p>
      <p>
        {props.category.exercises.map((exercise) => (
          <div>
            <p>name: {exercise.name} </p>
            <p> description: {exercise.description} </p>
            <img src={exercise.image_url} />
          </div>
        ))}
      </p>
    </div>
  );
}
