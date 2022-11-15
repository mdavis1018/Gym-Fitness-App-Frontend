export function DetailsUpdate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateUser(props.user.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>User information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.user.name} name="name" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.user.image_url} name="image_url" type="text" />
        </div>
        <div>
          weight: <input defaultValue={props.user.weight} name="weight" type="number" />
        </div>
        <button type="submit">Update User info</button>
      </form>
    </div>
  );
}
