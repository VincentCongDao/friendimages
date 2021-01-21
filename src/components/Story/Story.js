import React from "react";
import "./story.css";
export default function Story() {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/instagram/cooking/cook1.jpeg", name: "Asd" },
    { id: 2, image: "/images/instagram/culture/japan.jpeg", name: "DSA" },
    { id: 3, image: "/images/instagram/culture/chinese.jpeg", name: "SAD" },
    { id: 4, image: "/images/instagram/sea/sea1.jpeg", name: "SAD34" },
    { id: 5, image: "/images/instagram/cooking/cook1.jpeg", name: "Asd" },
    { id: 6, image: "/images/instagram/culture/japan.jpeg", name: "DSA" },
    { id: 7, image: "/images/instagram/culture/chinese.jpeg", name: "SAD" },
    { id: 8, image: "/images/instagram/sea/sea1.jpeg", name: "SAD34" },
  ]);
  return (
    <div className="story">
      {state.map((user) => (
        <div className="story-info" key={user.id}>
          <div className="slider-img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="story-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
}
