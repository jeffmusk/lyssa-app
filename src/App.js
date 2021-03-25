import "./App.css";
import Login from "./views/Login";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="w-full flex flex-col bg-gray-200 items-center  justify-center">
      <Link to="/login">To login</Link>
      <br />
      <Link to="/singup">To SignUp</Link>
    </div>
  );
}

export default App;
