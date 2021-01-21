import "./App.css";
import Context from "./components/Hero/Context";
import Model from "./components/Model/model";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Post from "./components/Post/Post";
import Story from "./components/Story/Story";

function App() {
  return (
    <Context className="App">
      <Navbar />
      <Model />
      <div className="container">
        <Story />
        <Home />
        <Post />
      </div>
    </Context>
  );
}

export default App;
