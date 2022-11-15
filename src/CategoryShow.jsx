import { useState } from "react";

export function CategoryShow(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <h1>Category information</h1>
      <p>Name: {props.category.title}</p>
      <p>Height: {props.category.description}</p>
      Search filter:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-md-2 g-3">
          {props.category.exercises
            .filter((exercise) => exercise.name.toLowerCase().includes(searchFilter.toLowerCase()))
            .map((exercise) => (
              <div className="card">
                <div key={exercise.id}>
                  <p> Exercise Name: {exercise.name} </p>
                  <p> Description: {exercise.description} </p>
                  <img src={exercise.image_url} width="500" height="400" />
                  <button onClick={() => props.onSelectDetail(exercise)}>Add to workout</button>
                </div>
              </div>
            ))}
          ;
        </div>
      </div>
    </div>
  );
}
