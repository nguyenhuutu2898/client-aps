import logo from "./logo.svg";
import "./App.css";
import Viewer from "./viewer";

function App() {
  return (
    <div className="App">
      <div id="header">
        <span className="title">Simple Viewer</span>
        <select name="models" id="models"></select>
        <button id="upload" title="Upload New Model">
          Upload
        </button>
        <input style={{ display: "none" }} type="file" id="input" />
      </div>
      <Viewer/>
    </div>
  );
}

export default App;
