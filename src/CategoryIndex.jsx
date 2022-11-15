export function CategoryIndex(props) {
  return (
    <div>
      {console.log(props)}
      <h1 className="container text-center text-white"> Categories </h1>
      <div className="container text-center text-black">
        <div className="row row-cols-4 row-cols-md-2 g-4">
          {props.categories.map((category) => (
            <div key={category.id}>
              <div className="card">
                <h2>{category.title}</h2>
                <img src={category.image_url} width="630" height="500" />
                <p> Description: {category.description}</p>
                {/* <p> Category: {category.category_category}</p> */}
                <button class="btn btn-dark" onClick={() => props.onSelectCategory(category)}>
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
