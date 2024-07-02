export function ProductsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <div>
          Image_url: <input name="image_url" type="file" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}
