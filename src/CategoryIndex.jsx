export function CategoryIndex(props) {
  return (
    <div>
      {console.log(props)}
      <h1>All Categories </h1>
      <div className="container text-center">
        <div className="row row-cols-4 row-cols-md-2 g-4">
          {props.categories.map((category) => (
            <div key={category.id}>
              <div className="card">
                <h2>{category.title}</h2>
                <img src={category.image_url} />
                <p>Height: {category.description}</p>
                {/* <p> Category: {category.category_category}</p> */}
                <button onClick={() => props.onSelectCategory(category)}>More info</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
