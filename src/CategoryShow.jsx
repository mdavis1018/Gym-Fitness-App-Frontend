export function CategoryShow(props) {
  return (
    <div>
      <h1>Category information</h1>
      <p>Name: {props.category.title}</p>
      <p>Height: {props.category.description}</p>
      <button>Will show exercises</button>
    </div>
  );
}
