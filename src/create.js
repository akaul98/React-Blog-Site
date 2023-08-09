import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [author, setAuthor] = useState("Jon Doe");
  const history = useHistory();
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const blogObj = { title, body, author };
  //   setIsPending(true);
  //   console.log(isPending);
  //   fetch("http://localhost:8000/blogs", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(blogObj),
  //   })
  //     .then(() => {
  //       console.log("New Blog Add");
  //       setIsPending(false);
  //       history.push("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsPending(false);
  //     });
  //   console.log(isPending);

  const handleSubmit = (e) => {
    setIsLoading(true);

    console.log(isLoading);

    e.preventDefault();
    const blog = { title, body, author };
    setIsLoading(false);
    console.log(isLoading);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsLoading(false);
      console.log(isLoading);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <p>{isLoading}</p>
      <h2>Create A Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <label>Blog Author</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="Jon Doe">Jon Doe</option>
          <option value="Jane Doe">Jane Doe</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled> In-Progress</button>}
        {}
      </form>
    </div>
  );
};

export default Create;
