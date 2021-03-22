import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Lyssa App</p>
        <div className="bg-red-500 w-5 h-5"></div>
        <p>Be Jeff G</p>
      </header>
    </div>
  );
}

export default App;
