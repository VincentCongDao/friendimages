import React from "react";
import "./Home.css";
import { FaCamera } from "react-icons/fa";
import { ContextProvider } from "../../Hero/Context";
export default function Home() {
  const { create, loading, user } = React.useContext(ContextProvider);
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");
  const handleImage = (e) => {
    console.log(e.target.files[0]);
  };
  const createPost = (e) => {
    e.preventDefault();
    create({ title, image });
    setTitle("");
    setImage("");
  };
  return (
    <>
      {!loading && user ? (
        <div className="create">
          <form onSubmit={createPost}>
            <div className="create-input-form">
              <input
                type="text"
                className="create-input"
                placeholder="Tell us about your world"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>
            <div className="create-second">
              <div className="create-second-a">
                <label htmlFor="file">
                  <FaCamera className="Camera-icon" />
                </label>
                <input
                  type="file"
                  className="file"
                  onChange={handleImage}
                  id="file"
                  required
                />
              </div>
              <div className="create-second-b">
                <input type="submit" value="Create" className="btn-submit" />
              </div>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
